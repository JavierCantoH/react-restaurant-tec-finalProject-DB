import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import TodoForm  from "./TodoFormComponent";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getTodo, updateTodo } from "./api";

function EditTodo() {

    const match = useRouteMatch()
    const [todo, setTodo] = useState();
    const history = useHistory()

    useEffect(() => {
        const fetchTodo = async () => {
        const todo = await getTodo(match.params.id)
        setTodo(todo)
        }
        fetchTodo()
    });

    const onSubmit = async (data) => {
        await updateTodo(data, match.params.id)
        history.push("/todo")
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Edit Todo</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Edit Todo</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="mt-3">
                    <h3>Edit Todo Item</h3>
                    <TodoForm todo={todo} onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default EditTodo;    