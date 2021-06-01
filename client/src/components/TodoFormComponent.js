import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function TodoForm({ todo, onSubmit }) {

    const { register, handleSubmit } = useForm({
        defaultValues: { text: todo ? todo.text : "" },
    });
    
    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Todo Form</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Todo Form</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input
                        className="form-control"
                        type="text"
                        {...register("text", { required: true })}
                        name="text"
                        id="text"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Save Todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoForm;    