import * as React from 'react'
import { NavLink } from "react-router-dom"

interface IProps {
    headerText: string
}

class Header extends React.Component<IProps> {
    constructor(props: IProps)
    {
        super(props)
    }

    public render() {
        return (
            <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/mijnwerk">Mijn Werk</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <NavLink to="/"><h2>Ryan Graute Portfolio</h2></NavLink>
            </header>
            <h2 className="header-text">{this.props.headerText}</h2>
            </>
        )
    }
}

export default Header