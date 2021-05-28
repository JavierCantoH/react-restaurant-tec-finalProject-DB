import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu() {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menú</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menú</h3>
                    <hr />
                </div>                
            </div>
        </div>
    );
}

export default Menu;    