import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    
    return (
    <header style={headerStyle}>
        <h1>My Todo List</h1>
        <Link to="/TODO-App-React" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
    </header>
    );
}
    
const headerStyle = {
    background: 'teal',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
} 
    
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;