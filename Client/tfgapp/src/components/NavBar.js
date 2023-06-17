/**
 * @fileoverview Creación del navbar superior
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import React from 'react';
import logo from "../assets/img/logo.png";
import { FaHome, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ marginLeft: 25 }} />
        <nav className='nav1'>
          <ul style={{ listStyle: 'none', display: 'flex', marginRight: 60, padding: 0 }}>
            <li style={{ marginLeft: 'auto', marginRight: 15 }}><Link to='/'><FaHome size={23} style={{ marginRight: 5, marginBottom: -4 }} />Home</Link></li>
            <li style={{ marginRight: 15 }}><Link to='/card'><FaPlusCircle size={20} style={{ marginRight: 5, marginBottom: -4 }} />Create</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;