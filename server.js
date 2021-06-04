const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const todoRoute = require('./routes/todo');

mongoose.connect("mongodb://localhost/todo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log("mongodb connected successfully..."))
        .catch(()=>console.error("error occur"))

app.use(express.json());
app.use(cors());
app.use("/todo",todoRoute);


app.listen(3000, () => {
 console.log("Server started on port 3000")
})