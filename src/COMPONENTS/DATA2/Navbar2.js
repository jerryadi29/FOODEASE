import React from 'react'
import { BiCartAlt } from "react-icons/bi";
import '../../STYLING/Nav.css';

function Navbar2(props) {
    return (
        <div>
            <div>

                <h3>FOOD EASE </h3>
                <ul className="Nav-bar">
                <li><span className="item-count">{props.total}</span><BiCartAlt  style={{fontSize:80}}className="icon"></BiCartAlt>
                
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar2
