import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getTodos } from "./api"

function TodoList() {

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const todos = await getTodos()
            setItems(todos)
        }
        fetchItems()
    }, [])

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Todo list</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Todo list</h3>
                    <hr />
                    <Link to="/createtodo" className="btn btn-primary">Create todo</Link>
                </div>                
            </div>
            <div className="row">
                <div className="mt-3">
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Text</th>
                            {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(todo => (
                                <tr key={todo._id}>
                                <td>
                                    {todo.text}
                                </td>
                                {/* <td>
                                    <Link to={`/edittodo/${todo._id}`}>Edit</Link>
                                </td> */}
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TodoList;    