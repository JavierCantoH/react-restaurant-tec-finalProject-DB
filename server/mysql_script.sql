mysql -u root -p

CREATE DATABASE employeedb;

USE employeedb;

CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT,
	roles VARCHAR(45) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE empleado(
	id INT NOT NULL AUTO_INCREMENT,
	role INT NOT NULL,
	name VARCHAR(45) NOT NULL,
	country VARCHAR(45) NOT NULL,
	salary INT NOT NULL,
	FOREIGN KEY(role) REFERENCES role(id),
	PRIMARY KEY(id)
);

CREATE TABLE attendance(
	id INT NOT NULL AUTO_INCREMENT,
	idEmployee INT NOT NULL,
	status ENUM('check_in','check_out') NOT NULL,
	created DATETIME,
	FOREIGN KEY(idEmployee) REFERENCES empleado(id) ON DELETE CASCADE,
	PRIMARY KEY(id)
);


# TRIGGERS:
CREATE TABLE empleado_trigger_table (
    idTriggerTable INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id INT NOT NULL,
    salary INT NOT NULL,
    changedat DATETIME DEFAULT NULL,
    action VARCHAR(50) DEFAULT NULL
);
CREATE TRIGGER before_salary_update 
BEFORE UPDATE ON empleado
FOR EACH ROW INSERT INTO empleado_trigger_table SET action = 'update', id = OLD.id, salary = OLD.salary, changedat = NOW();
SHOW TRIGGERS;
# Make a salary update to test TRIGGER
SELECT * FROM empleado_trigger_table;




# STORED FUNCTION & STORED PROCEDURE:
DELIMITER $$
CREATE FUNCTION HoursWorked(check_in datetime, check_out datetime) 
RETURNS time DETERMINISTIC
BEGIN
DECLARE total_time time;
SET total_time = TIMEDIFF(check_in, check_out);
RETURN (total_time);
END$$
DELIMITER ;
SHOW FUNCTION STATUS WHERE db = 'employeedb';

DELIMITER $$
CREATE PROCEDURE GetTotalHours(IN idEmployee INT, IN fecha DATE)
BEGIN SELECT 
A1.idEmployee,
A1.created AS check_in_at,
A2.created AS check_out_at,
HoursWorked(A2.created, A1.created) AS total_time
FROM
attendance AS A1 
INNER JOIN attendance AS A2 
ON A1.idEmployee = A2.idEmployee 
AND DATE(A1.created) = DATE(A2.created) 
WHERE 1 = 1 
AND A1.status = 'check_in' 
AND A2.status = 'check_out' 
AND DATE(A1.created) BETWEEN fecha 
AND fecha 
AND DATE(A2.created) BETWEEN fecha 
AND fecha 
AND A1.idEmployee = idEmployee
ORDER BY A1.created DESC;    
END$$
DELIMITER ;
CALL GetTotalHours(1, '2021-05-30');