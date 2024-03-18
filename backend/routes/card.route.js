import express from 'express';
import { createCard, getCards } from '../controllers/card.controller.js';

const router  = express.Router();

router.get('/cards', getCards)
router.post('/cards', createCard)


export default router;