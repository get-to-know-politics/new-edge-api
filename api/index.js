import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './firebaseConfig';
import contactRouter from './server/routes/ContactRoutes.js'
import authRouter from './server/routes/AuthRoutes.js'

config.config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/auth', authRouter)


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the New Edge API.'
}));

app.listen(port, async () => {
    console.log(`Server is running on PORT ${port} 🎉`);
});

export default app;