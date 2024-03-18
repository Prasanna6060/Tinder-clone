import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import  cors from 'cors'

import cardsRouter from './routes/card.route.js'


// db connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to db")
}).catch(err => console.log(`unable to connect to db ${err.message}`))

// app configuration
const app = express();
const Port = process.env.PORT || 3000


// middleware 
app.use(cors());
app.use(express.json());

// routes
app.use('/tinder', cardsRouter)

// server listening

app.listen(Port, () => {
      console.log(`Server listening on port ${Port}`)
})


