import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    const imgStyle = {
        maxHeight: 128,
        maxWidth: 128
    }

    const leaders = props.leaders.map((leader) => {
        return (
            <Media className="mt-5">
                <Media left className="mr-5">
                    <Media object src={leader.image} style={imgStyle} alt={leader.name} />
                </Media>
                <Media body>
                    <Media heading>{leader.name}</Media>
                    <p>{leader.designation}</p>
                    {leader.description}
                </Media>
            </Media>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Conócenos</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Conócenos</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Nuestra Historia</h2>
                    <p>aquí van unos datos</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Datos rápidos</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Inicio</dt>
                                <dd className="col-6">18 Feb. 2021</dd>
                                <dt className="col-6">Dueña</dt>
                                <dd className="col-6">Dafne</dd>
                                <dt className="col-6">Ubicación</dt>
                                <dd className="col-6">Pachuca, México</dd>
                                <dt className="col-6">Empleados</dt>
                                <dd className="col-6">2</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Healthy Place</p>
                                <br/>
                                <footer className="blockquote-footer">Dafne,
                                <cite title="Source Title"> Good & Sweet Options</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Integrantes de Healthy Place</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    