import {React, useState} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//using axios to make API request
import Axios from 'axios'

function Roles() {

    // add role states
    const [roles, setRoles] = useState('');
    // show role list state
    const[roleList, setRoleList] = useState([]);
    // update sole state
    const[newRole, setNewRole] = useState('');


    //add role 
    const addRole = () => {
        Axios.post('http://localhost:3001/createrole', {
            roles: roles,
        }).then(() => {
            alert("Cargo agregado");
            setRoleList([...roleList, {
                roles: roles,
            },]);
        });
    };

     //show all roles function
     const getRoles = () => {
        Axios.get('http://localhost:3001/roles').then((response) => {
            setRoleList(response.data)
        });   
    };

    //update role name function
    const updateRoleName = (id) => {
        Axios.put('http://localhost:3001/updaterole', {
            roles: newRole,
            id: id
        }).then((response) => {
            console.log(response);
            alert("Cargo modificado");
            setRoleList(roleList.map((val) => {
                return val.id === id ? {
                    id: val.id,
                    roles: newRole,
                } : val;
            }));
        });   
    };

    // delete role function
    const deleteRole = (id) => {
        Axios.delete(`http://localhost:3001/deleterole/${id}`).then((response) => {
            console.log(response);
            alert("Cargo eliminado");
            setRoleList(roleList.filter((val) => {
                return val.id !== id;
            }));
        });   
    };


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Cargos</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Cargos</h3>
                    <hr />
                </div>                
            </div>

            <div className="information">
                <label>Cargo:</label>
                <input type="text" onChange={(event) => {setRoles(event.target.value);}}/>
                <button onClick={addRole}>Añadir Cargo</button>
            </div>
            <div className="employees">
                <button onClick={getRoles}>Mostrar Cargos</button>
                {roleList.map((val, key) => {
                    return (
                        <div className="employee">
                            <div>
                                <h3>Id: {val.id}</h3>
                                <h3>Cargo: {val.roles}</h3>
                            </div>
                            <div>
                                <input type="text" placeholder="Cambiar nombre del cargo" onChange={(event) => {setNewRole(event.target.value);}}/>
                                <button onClick={() => {updateRoleName(val.id);}}>{" "}Modificar cargo</button>
                                <button onClick={() => {deleteRole(val.id);}}>Eliminar Cargo</button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Roles;    