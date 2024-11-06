const express = require('express');

const app = express();

const PORT =   5050;

const data1 = [1,2,3,7,8,20];

app.use(express.json());
app.get('/', (req,res) => {
    res.send(data1).status(200);
});


app.listen(PORT,() => {
    console.log(`Server is Running on port ${PORT}`);
});