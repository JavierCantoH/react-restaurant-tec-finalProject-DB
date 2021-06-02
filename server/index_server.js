// setup express server
const express = require("express");
const app = express();
//setup mysql
const mysql = require('mysql');
//cors
const cors = require('cors');
const { json } = require("express");
app.use(cors());
//use express
app.use(express.json())
//define port
const PORT = 3001;
// mongoose
const mongoose = require("mongoose");
//connect mongoose to mongodb (todos is the name of the db)
mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log("Mongodb connection established successfully")
});
//import Todo model for mongoose
const Todo = require("./models/Todo");









// ------------- MYSQL ----------------------
//credentials mysql
const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: '11Camotit0_JL99',
    database: 'employeedb'
});

// insert new employee 
app.post('/create',(req, res) => {
    const role = req.body.role;
    const name = req.body.name;
    const country = req.body.country;
    const salary = req.body.salary;
    //mysql query to insert data
    db.query("INSERT INTO empleado(role,name,country,salary) VALUES(?,?,?,?)", 
        [role, name, country, salary], 
        (err,result) => {
            if (err) {
                console.log(err);
            } else{
                res.send("Values inserted");
                console.log(result);
            }
        }
    );
});
// select * to show all employees
app.get('/employee', (req, res) => {
    db.query("SELECT * FROM empleado", (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// update employee salary 
app.put('/updatesalary', (req, res) => {
    const id = req.body.id;
    const salary = req.body.salary;
    db.query("UPDATE empleado SET salary = ? WHERE id = ?", [salary, id], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// delete employee
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM empleado WHERE id = ?", id, (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// insert new status 
app.post('/addCheck',(req, res) => {
    const idEmployee = req.body.idEmployee;
    const status = req.body.status;
    const created = req.body.created;
    //mysql query to insert data
    db.query("INSERT INTO attendance(idEmployee,status,created) VALUES(?,?,?)", 
        [idEmployee, status, created], 
        (err,result) => {
            if (err) {
                console.log(err);
            } else{
                res.send("Values inserted");
                console.log(result);
            }
        }
    );
});
// select * to show all status
app.get('/showCheck', (req, res) => {
    db.query("SELECT * FROM attendance", (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// insert new role 
app.post('/createrole',(req, res) => {
    const roles = req.body.roles;
    //mysql query to insert data
    db.query("INSERT INTO role(roles) VALUES(?)", roles, (err,result) => {
            if (err) {
                console.log(err);
            } else{
                res.send("Role inserted");
                console.log(result);
            }
        }
    );
});
// select * to show all roles
app.get('/roles', (req, res) => {
    db.query("SELECT * FROM role", (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// update role name 
app.put('/updaterole', (req, res) => {
    const id = req.body.id;
    const roles = req.body.roles;
    db.query("UPDATE role SET roles = ? WHERE id = ?", [roles, id], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// delete role
app.delete('/deleterole/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM role WHERE id = ?", id, (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});
// select * to show hour worked in one day by one employee
app.get('/hours', (req, res) => {
    const idEmployee = req.body.idEmployee;
    const fecha = req.body.fecha;
    db.query("CALL GetTotalHours(?,?)", [idEmployee, fecha], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.json(result);
        }
    });
});
// select * to show all triggers
app.get('/trigger', (req, res) => {
    db.query("SELECT * FROM empleado_trigger_table", (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});









// ------------- MONGODB ----------------------
//find all todos
app.get("/todo", (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        console.log(err);
      } else {
        res.json(todos);
      }
    });
});
// post a new todo item
app.post("/createtodo", (req, res) => {
    const todo = new Todo(req.body);
    todo
        .save()
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});
// edit todo item (first you find it)
app.get("todo/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    });
});
//edit todo item (then you post)
app.post("todo/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        if (!todo) {
        res.status(404).send("Todo not found");
        } else {
        todo.text = req.body.text;

        todo
            .save()
            .then((todo) => {
            res.json(todo);
            })
            .catch((err) => res.status(500).send(err.message));
        }
    });
});

//start app and verify it is running

app.listen(PORT,() => console.log("Express server is running on port " + PORT));
// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });