import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Inicio</Link></li>
                            <li><Link to='/aboutus'>Conócenos</Link></li>
                            <li><Link to='/menu'>Menú</Link></li>
                            <li><Link to='/contactus'>Contáctanos</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Nuestra dirección</h5>
                        <address>
                        Tula de Allende, Hgo - Pachuca de Soto, Hgo<br />
                        <i className="fa fa-phone fa-lg"></i>: +52 773 5188<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:healthy.placee@gmail.com">
                        healthy.placee@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon" href="https://www.facebook.com/healthyyplacee"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon" href="https://instagram.com/healthyyplacee?utm_medium=copy_link"><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-social-icon" href="https://api.whatsapp.com/send?phone=527711868926"><i className="fa fa-whatsapp"></i></a>
                            <a className="btn btn-social-icon" href="mailto:healthy.placee@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2021 Healthy Place</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;