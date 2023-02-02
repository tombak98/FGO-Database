import React from "react";
import { useNavigate } from "react-router-dom";

// simple navigation bar, temporary for now

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div id="navbar">
            <p style={{cursor: 'pointer'}} onClick={()=>navigate('/')}>FGO Database</p>
        </div>
    )
}

export default Navbar