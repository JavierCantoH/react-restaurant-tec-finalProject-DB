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
            res.send(result);
        }
    });
});


//start app
app.listen(3001,() => console.log("Express server is running on port 3001"));