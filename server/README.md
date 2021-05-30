# Cargos, Staff, Check in/out  
Reference to /server/mysql_script.txt

## Database explination
The database is created in MySQL (https://www.mysql.com) and with React (https://es.reactjs.org/docs/create-a-new-react-app.html), the server is Node.js Express (https://expressjs.com/es/). 

The employeedb database contain 3 tables (role, empleado and attendance).\

The 'role table' is a simple table with one id (primary key not null auto_increment) and a varchar not null for the role name.\

The 'empleado table' contains one id (primary key not null auto_increment), a fk for the role id in which the employee is in charge, country varchar and a salary int.\

The last table is 'attendance' in which the employee will make check in/out with their unique employee id. This table contains one id (primary key not null auto_increment), the fk to the employee id, the status (check in or out) and a created field (a datetime format).

Specific format is requiered to use de database.

### How to insert data (examples)

### Cargos
Just one varchar(45) field. Example:
CEO, CTO, Cheff, Assistant etc.

Mostrar Cargos clicked:
1 - CEO
2 - CTO
3 - Cheff
4- Assistant

### Staff
(Requiere at least one role added into 'role table') Ex:
Cargo (int fk role table): 1
Nombre (varchar(45)): Dafne
País varchar(45)): Mexico
Salario (int): 100


### Check in/out
(Requiere at least one employee added into 'empleado table') Ex:
Id empleado (int fk empleado table): 1
Status (ENUM(just 2 options: 'check_in','check_out')): check_in
Fecha (DATETIME with this specific format): 2015-11-05 14:29:36 (yyyy-mm-dd hr-min-sec)


