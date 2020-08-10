// use firebase authentication
import { auth } from '../../firebaseConfig'

import Util from '../utils/Util';

const util = new Util();

class AuthController {
    static async signIn(req, res) {
        auth.signInWithEmailAndPassword(req.body.email, req.body.password).then(() => {
            util.setSuccess(200, 'User signed in successfully')
            return util.send(res)
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