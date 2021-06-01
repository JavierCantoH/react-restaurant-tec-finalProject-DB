# Cargos, Staff, Check in/out  
Reference to /server/mysql_script.sql
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
-Cargo (int fk role table): 1
-Nombre (varchar(45)): Dafne
-País varchar(45)): Mexico
-Salario (int): 100


### Check in/out
(Requiere at least one employee added into 'empleado table') Ex:
-Id empleado (int fk empleado table): 1
--Status (ENUM(just 2 options: 'check_in','check_out')): check_in
Fecha (DATETIME with this specific format): 2015-11-05 14:29:36 (yyyy-mm-dd hr-min-sec)


