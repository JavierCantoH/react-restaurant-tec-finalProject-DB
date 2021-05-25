import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Foro(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Foro</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Foro</h3>
                    <hr />
                </div>                
            </div>
        </div>
    );
}

export default Foro;    