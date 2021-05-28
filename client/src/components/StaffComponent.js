import {React, useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
//using axios to make API request
import Axios from 'axios'

function Staff() {

    // add employee states
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [salary, setSalary] = useState(0);
    // show employee list state
    const[employeeList, setEmployeeList] = useState([]);
    // update salary state
    const[newSalary, setNewSalary] = useState(0);

    //add employee function
    const addEmployee = () => {
        Axios.post('http://localhost:3001/create', {
            role: role,
            name: name, 
            country: country,
            salary: salary,
        }).then(() => {
            alert("Empleado agregado");
            setEmployeeList([...employeeList, {
                role: role,
                name: name, 
                country: country,
                salary: salary,
            },]);
        });
    };

    //show all employees function
    const getEmployees = () => {
        Axios.get('http://localhost:3001/employee').then((response) => {
            setEmployeeList(response.data)
        });   
    };

    //update salary function
    const updateEmployeeSalary = (id) => {
        Axios.put('http://localhost:3001/update', {
            salary: newSalary,
            id: id
        }).then((response) => {
            console.log(response);
            alert("Salario modificado");
            setEmployeeList(employeeList.map((val) => {
                return val.id === id ? {
                    id: val.id,
                    name: val.name,
                    country: val.country,
                    salary: newSalary,
                } : val;
            }));
        });   
    };

    // delete employee function
    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            console.log(response);
            alert("Empleado eliminado");
            setEmployeeList(employeeList.filter((val) => {
                return val.id !== id;
            }));
        });   
    };

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Staff</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Staff</h3>
                    <hr />
                </div>                
            </div>

            {/* Roles div
            <div className="row row content">
                <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Roles</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">1</dt>
                                    <dd className="col-6">CEO</dd>
                                    <dt className="col-6">2</dt>
                                    <dd className="col-6">CTO</dd>
                                    <dt className="col-6">3</dt>
                                    <dd className="col-6">Asistente</dd>
                                    <dt className="col-6">4</dt>
                                    <dd className="col-6">Segundo Cheff</dd>
                                </dl>
                            </CardBody>
                        </Card>
                        <hr />
                </div>
            </div> */}
            

            <div className="information">
                <label>Cargo:</label>
                <input type="text" onChange={(event) => {setRole(event.target.value);}}/>
                <label>Nombre:</label>
                <input type="text" onChange={(event) => {setName(event.target.value);}}/>
                <label>País:</label>
                <input type="text" onChange={(event) => {setCountry(event.target.value);}}/>
                <label>Salario:</label>
                <input type="number" onChange={(event) => {setSalary(event.target.value);}}/>
                <button onClick={addEmployee}>Añadir Empleado</button>
            </div>
            <div className="employees">
                <button onClick={getEmployees}>Mostrar Empleados</button>
                {employeeList.map((val, key) => {
                    return (
                        <div className="employee">
                            <div>
                                <h3>Cargo: {val.role}</h3>
                                <h3>Nombre: {val.name}</h3>
                                <h3>País: {val.country}</h3>
                                <h3>Salario {val.salary}</h3>
                            </div>
                            <div>
                                <input type="text" placeholder="$2000..." onChange={(event) => {setNewSalary(event.target.value);}}/>
                                <button onClick={() => {updateEmployeeSalary(val.id);}}>{" "}Modificar salario</button>
                                <button onClick={() => {deleteEmployee(val.id);}}>Eliminar Empleado</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Staff;    