import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, useHistory} from 'react-router-dom';
import TodoForm  from "./TodoFormComponent";
import { createTodo } from "./api";

function CreateTodo() {

    const history = useHistory()
  
    const onSubmit = async (data) => {
        await createTodo(data)
        history.push("/todo")
    };

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/todo">Todo List</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Crear To do</BreadcrumbItem>
                </Breadcrumb>             
            </div>
            <div className="row">
                <div className="mt-3">
                    <h3>Crear nuevo</h3>
                    <TodoForm onSubmit={onSubmit} />
                </div>  
            </div>
        </div>
    );
}

export default CreateTodo;    