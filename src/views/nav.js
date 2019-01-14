import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
   <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/houses'>Noble Houses</Link></li>
            <li><Link to='/books'>Books</Link></li>
        </ul>
    </nav>
);

export default Nav;