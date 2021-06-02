import {React, useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
//using axios to make API request
import Axios from 'axios'

function Salario() {

    // show employee list state
    const[triggerList, setTriggerList] = useState([]);

    //show all employees function
    const getTrigger = () => {
        Axios.get('http://localhost:3001/trigger').then((response) => {
            setTriggerList(response.data)
        });   
    };
    

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/staff">Staff</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Cambios de salario</BreadcrumbItem>
                </Breadcrumb>             
            </div>
            <div className="employees">
                <Button color="info" onClick={getTrigger}>Mostrar Triggers</Button>
                {triggerList.map((val, key) => {
                    return (
                        <div className="employee">
                            <div>
                                <h3>Id: {val.idTriggerTable}</h3>
                                <h3>Id empleado: {val.id}</h3>
                                <h3>Salario anterior: {val.salary}</h3>
                                <h3>Fecha de cambio: {val.changedat}</h3>
                                <h3>Acción: {val.action}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Salario;    