import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Staff(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Staff</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Staff</h3>
                    <hr />
                </div>                
            </div>
        </div>
    );
}

export default Staff;    