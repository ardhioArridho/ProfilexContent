const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=> {
    res.send("You are within the domain of ProfilexContent")
})

app.listen(PORT, (req,res)=> {
    console.log(`ProfilexContent is airing on channel ${PORT}`)
})