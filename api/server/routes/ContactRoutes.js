import { Router } from 'express';
import ContactController from '../controllers/ContactController';

const contactRouter = Router();

contactRouter.get('/', ContactController.getAllContacts);
contactRouter.post('/', ContactController.addContact);
contactRouter.get('/:id', ContactController.getAContact);
contactRouter.put('/:id', ContactController.updatedContact);
contactRouter.delete('/:id', ContactController.deleteContact);

export default contactRouter;