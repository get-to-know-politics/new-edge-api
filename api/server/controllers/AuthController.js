// use firebase authentication
import request from 'request'
import { auth, firebaseConfig } from '../../firebaseConfig'

import Util from '../utils/Util';

const util = new Util();

class AuthController {
    static async signIn(req, res) {
        auth.signInWithEmailAndPassword(req.body.email, req.body.password).then((user) => {
            return res.json(user)
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            util.setSuccess(errorCode, errorMessage)
            return util.send(res)
          });
    }

    static async signUp(req, res) {
        auth.createUserWithEmailAndPassword(req.body.email, req.body.password).then(() => {
            util.setSuccess(200, 'User created successfully')
            return util.send(res)
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            util.setSuccess(errorCode, errorMessage)
            return util.send(res)
          });
    }

    static async refresh(req, res) {
        const options = {
            url: `https://securetoken.googleapis.com/v1/token?key=${firebaseConfig.apiKey}`,
            method: 'POST',
            body: JSON.stringify({
                grant_type: 'refresh_token',
                refresh_token: req.body.refresh
            })
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(body)
            }
        }

        request(options, callback)
    }

    static async signOut(req, res) {
        auth.signOut().then(() => {
            util.setSuccess(200, 'User signed out')
            return util.send(res)
        }).catch(() => {
            util.setSuccess(500, "An error occurred on sign out")
            return util.send(res)
        })

    }
}

module.exports = AuthController