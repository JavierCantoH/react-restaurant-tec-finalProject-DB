import React from 'react';
import { Button} from 'reactstrap';
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
                <div className="col-12">
                    <h3>Escribe nuevo to do</h3>
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
                        <Button color="success" type="submit" className="btn btn-primary">
                        Guardar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoForm;    