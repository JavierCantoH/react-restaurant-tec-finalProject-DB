import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        
                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo2.png' height="30" width="41" alt='Healty Place' /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span>Inicio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span>Conócenos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-utensils fa-lg"></span> Menú</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/roles'><span className="fa fa-tags fa-lg"></span>Cargos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/staff'><span className="fa fa-users fa-lg"></span>Staff</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/check'><span className="fa fa-user-check fa-lg"></span>Check in/out</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/hours'><span className="fa fa-clock fa-lg"></span>Total de Horas</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/todo'><span className="fa fa-ellipsis-h fa-lg"></span>Todos</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="black-outline col-6 ">
                                <h1>Healthy Place</h1>
                                <h5>Postres y snacks saludables!</h5>
                            </div>
                            
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;