import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='FooterPageTitle'>
            Tamago0926's web
        </div>
        <div className='PageLinks'>
            <ul>
                <li><Link to="/">Main Page</Link></li>
                <li><Link to="/SubPage">Sub Page</Link></li>
            </ul>
        </div>
        <div className='SNSLinks'>
            <a href='https://www.youtube.com/channel/UCwjwUdj3Q2U3FvnoHkh6rlw'>YouTube<i class="fa-brands fa-youtube"></i></a>
            <a href="https://x.com/0926_tamago">Twitter<i class="fa-brands fa-square-x-twitter"></i></a>
        </div>
    </div>
  )
}

export default Footer
