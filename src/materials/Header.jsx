import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <header>
        <div className='title'>
          Tamago0926's web
          </div>

        <ul className='ulList'>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/SubPage">Sub Page</Link></li>
        </ul>
        </header>
  )
}

export default Header
