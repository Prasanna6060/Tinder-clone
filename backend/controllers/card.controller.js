import Card from "../models/card.model.js";

export const createCard = async(req, res) => {
  const { name, imgUrl } = req.body;
  try {
    const newCard = new Card({
      name,
      imgUrl,
    });
    const savedCard = await newCard.save();
    return res.status(201).json({ message: "Created successfully", savedCard });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCards = async(req, res) => {
  try{
    const getCards =   await Card.find();
  res.status(200).json({message: " Success", getCards})
}
  catch(err) {
    return res.status(500).json({
        error: err.message
    })
  }
};
