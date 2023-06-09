import React from "react";
import { Link } from "react-router-dom";
import './Core.css';

const Header = () => {

    return (
        <div className="Header">
            <p>Header component</p>
            <Link to="/" className="link">
                <button to="/" className="button">Home</button>
            </Link>
            <Link to="/contact" className="button">
                <button>Contact</button>
            </Link>
        </div>
    )

}

export default Header