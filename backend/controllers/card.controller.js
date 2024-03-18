import Card from "../models/card.model.js";

export  const createCard = (req, res) => {
 const dbCards = req.body;
 try {
    const createCard = dbCards.create(dbCards);
    console.log(createCard);
    return res.status(201).json({ message: "Created successfully", createCard})
 } catch (error) {
    return res.status(500).json({error: error.message})
 }
};

export const getCards = (req, res) => {
   const getCards =  Card.find();
   console.log(getCards);
}