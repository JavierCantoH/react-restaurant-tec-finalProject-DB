import {React, useState} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//using axios to make API request
import Axios from 'axios'

function Check() {

    // add employee status states
    const [idEmployee, setIdEmployee] = useState(0);
    const [status, setStatus] = useState('');
    const [created, setCreated] = useState('');
    // show employee status list state
    const[statusList, setStatusList] = useState([]);


    //add employee status function
    const addCheck = () => {
        Axios.post('http://localhost:3001/addCheck', {
            idEmployee: idEmployee,
            status: status,
            created: created, 
        }).then(() => {
            alert("Check agregado");
            alert("Empleado agregado");
            setStatusList([...statusList, {
                idEmployee: idEmployee,
                status: status,
                created: created,
            },]);
        });
    };

    //show all employees status function
    const getChecks = () => {
        Axios.get('http://localhost:3001/showCheck').then((response) => {
            setStatusList(response.data)
        });   
    };


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Check in/out</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Check in/out</h3>
                    <hr />
                </div>                
            </div>

            <div className="information">
                <label>Id Empleado:</label>
                <input type="number" onChange={(event) => {setIdEmployee(event.target.value);}}/>
                <label>Status:</label>
                <input type="text" onChange={(event) => {setStatus(event.target.value);}}/>
                <label>Fecha:</label>
                <input type="text" onChange={(event) => {setCreated(event.target.value);}}/>
                <button onClick={addCheck}>Añadir Check in/out</button>
            </div>
            <div className="employees">
                <button onClick={getChecks}>Mostrar Checks in/out</button>
                {statusList.map((val, key) => {
                    return (
                        <div className="employee">
                            <div>
                                <h3>Check Id: {val.id}</h3>
                                <h3>Id Empleado: {val.idEmployee}</h3>
                                <h3>Status: {val.status}</h3>
                                <h3>Fecha: {val.created}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Check;    