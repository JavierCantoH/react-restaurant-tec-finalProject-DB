import {React, useState} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//using axios to make API request
import Axios from 'axios'

function Hours() {

    // add employee status states
    const [idEmployee, setIdEmployee] = useState(0);
    const [fecha, setFecha] = useState('');
    // show employee status list state
    const[hoursList, setHoursList] = useState([]);

    //show all employees status function
    const getHours = () => {
        Axios.get('http://localhost:3001/hours',{
            idEmployee: idEmployee,
            fecha: fecha,
        }).then((response) => {
            setHoursList(response.data)
        });   
    };


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Total de Horas</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Mostrar el total de horas trabajadas por un empleado en un día</h3>
                    <hr />
                </div>                
            </div>

            <div className="information">
                <label>Id Empleado:</label>
                <input type="number" onChange={(event) => {setIdEmployee(event.target.value);}}/>
                <label>Fecha:</label>
                <input type="text" onChange={(event) => {setFecha(event.target.value);}}/>
            </div>
            <div className="employees">
                <button onClick={getHours}>Total de Horas</button>
                {hoursList.map((val) => {
                    return (
                        <div className="employee">
                            {/* <h3>Id empleado: {val.idEmployee}</h3>
                            <h3>Fecha: {val.fecha}</h3> */}
                            <h3>{val.idEmployee}</h3>
                            <h3>{val.fecha}</h3>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Hours;    