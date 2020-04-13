import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './server/routes/ContactRoutes';

config.config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/contacts', contactRoutes);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the New Edge API.'
}));

app.listen(port, async () => {
    console.log(`Server is running on PORT ${port} 🎉`);
});

export default app;