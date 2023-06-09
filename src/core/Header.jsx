import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <p>Header component</p>
            <Link to="/" className="link">
                <button>Home</button>
            </Link>
            <Link to="/contact" className="link">
                <button>Contact</button>
            </Link>
        </>
    )

}

export default Header