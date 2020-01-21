//load out app somehow
const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(morgan('combined'))

app.get("/", (req, res)=>{
    console.log("request to the root");
    res.send("<h1> Hello from the root </h1>")
})


app.get("/users", (req, res)=>{
    var user1 = {
        first_name: "Paul",
        second: "Yakupov"    }
    var user2 = {
        first_name: "Natasha",
        second: "Akimova"    }

        res.json([user1, user2])
    // res.send("nodemon auto repair")
})

app.listen(3003, () => {
    console.log("server start working");
})