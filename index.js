const express = require('express');
const app = express();
const cors = require('cors')
const dotenv=require('dotenv').config();
const connectDb = require("./config/dbConnection");
const State = require('./models/stateModel'); 
connectDb();

app.use(cors());

app.use(express.json())

app.get('/getLatestEntry', async (req, res) => {
    const latestRecord = await State.findOne().sort({createdAt:-1})
    //console.log(latestRecord)
    res.status(200).json(latestRecord);
});

app.get('/getEntry', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/createEntry', async (req, res) => {
    const { temperature, pressure, depth } = req.body;
    if (typeof temperature === 'undefined' || 
        typeof pressure === 'undefined' || 
        typeof depth === 'undefined') {
        return res.status(400).json({ error: "Missing required fields: temperature, pressure, or depth" });
    }
    
    const contact= await State.create(
        {
            temperature,
            pressure,
            depth,
        }
    );
    res.status(201).json(contact);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
