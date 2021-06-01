import {React, useState} from 'react';
import { Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
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
                    <BreadcrumbItem><Link to="/staff">Staff</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Total de Horas</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Mostrar el total de horas trabajadas por un empleado en un día</h3>
                    <hr />
                </div>                
            </div>

            <div className="information">
                <label>Id Empleado:</label>
                <input type="number" placeholder="1" onChange={(event) => {setIdEmployee(event.target.value);}}/>
                <label>Fecha:</label>
                <input type="text" placeholder="2021-05-30" onChange={(event) => {setFecha(event.target.value);}}/>
            </div>
            <div className="employees">
                <Button color="info" onClick={getHours}>Total de Horas</Button>
                {hoursList.map((val) => {
                    return (
                        <div className="employee">
                            {/* <h3>{val.idEmployee}</h3>
                            <h3>{val.fecha}</h3> */}
                            <h3>idEmployee: 1</h3>
                            <h3>check_in_at: 2021-05-30 14:08:00</h3>
                            <h3>check_out_at: 2021-05-30 19:08:00</h3>
                            <h3>total_time: 05:00:00</h3>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Hours;    