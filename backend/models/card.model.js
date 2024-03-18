import mongoose  from "mongoose";

const cardsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    }
})

const Card = mongoose.model('Card', cardsSchema);

export default Card;