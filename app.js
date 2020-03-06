//load out app somehow
const express = require('express')

const morgan = require('morgan')

const mysql = require("mysql")


const server = express()
server.use(morgan('combined'))


// get
// delete
// update

// здесь у нас происходит подключение
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'pavel',
    database:"new_schema"
    // password: ""
})


// server.put("/user/insert/:id/:deal", (req,res) => {
//     console.log("Fetching user with id" + req.params.id);
//     const userId = req.params.id;
//     const deal = req.params.deal;

//     const queryINSERT =  "INSERT INTO TODO VALUES (?,?)";

//     conn.query(queryINSERT, [userId], [deal], (err, rows, field)=>{
//         if(err){
//             console.log( err.message);
//             res.sendStatus(500)
//             res.end();
//             return //сомневаюсь в необходимости той штуки
//         }
//     })

// });

server.get('/user/get/:id', (req, res)=>{

    console.log("Fetching user with id" + req.params.id);

    const userId = req.params.id;

    const querySELECT =  "SELECT * FROM TODO WHERE id = ?";

    conn.query(querySELECT, [userId], (err, rows, fields)=>{
       if(err){
           console.log( err.message);
           res.sendStatus(500)
           res.end();
           return //сомневаюсь в необходимости той штуки
       }
        // console.log(res.json(rows));
        // console.log(fields);
        console.log("fetch with success");
        res.json(rows);
    })

    // res.end()
})





server.get("/", (req, res)=>{
    console.log("request to the root");
    res.send("<h1> Привет, это базовая страница нашего сервера </h1>")
})


server.get("/users", (req, res)=>{
    var user1 = {
        first_name: "Semen",
        second: "Semenov"    }
    var user2 = {
        first_name: "Natasha",
        second: "Akimova"    }

        res.json([user1, user2])
    // res.send("nodemon auto repair")
})

server.listen(3003, () => {
    console.log("Сервер поднят 3003....");
})