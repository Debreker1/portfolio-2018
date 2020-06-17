import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

class Homepage extends React.Component {
    public render() {
        return (
            <div>
                <Header headerText="Welkom op mijn portfolio website!" />
                <div>
                    <div className="row bigger-text">
                        <div className="large-8 columns">
                            <p>
                                Welkom op mijn website! Ik ben Ryan Graute en ik vind het leuk om code te schrijven! Want wat is er mooier dan van je hobby je werk te maken?
				                Momenteel ben ik een student op <a href="http://www.hr.nl" target="__blank">Hogeschool Rotterdam</a> in Rotterdam.
                            </p>
                            <p>
                                Op deze website kunt u wat van mijn werk zien op de <NavLink to="/mijnwerk">mijn werk</NavLink> pagina. Op deze pagina kunt u ook mijn CV vinden.
                            </p>
                            <p>
                                Bent u geïnteresseerd of heeft u vragen/opmerkingen? Neem dan contact op via de <NavLink to="/contact">Contact</NavLink> pagina! En ik zal proberen
					            om zo snel mogelijk op uw email te reageren.
                            </p>
                        </div>
                        <div className="large-4 columns">
                            <img src="/img/ik.jpeg" alt="ik" id="ik-foto" />
                        </div>
                        <div className="cv">
                            <a href="downloads/cv-ryan-graute.pdf" target="__blank"><img id="cv-icon" src="/img/cv-icon.png" alt="CV icon" />Mijn CV</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage