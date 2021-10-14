import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../../STYLING/Nav.css';

function Navbar2(props) {
    return (
        <div>
            <div>

                <h3>FOOD EASE </h3>
                <ul className="Nav-bar">
                <li><span className="item-count">{props.total}</span><AddShoppingCartIcon  style={{fontSize:80}}className="icon"></AddShoppingCartIcon>
                
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar2
