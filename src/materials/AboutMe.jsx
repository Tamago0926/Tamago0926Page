import React from 'react'
import MyIcon from '../images/myicon.png';

const AboutMe = () => {
  return (
    <div>
      <div className='MyName'>
        Tamago0926
      </div>

      <div className='myIcon'>
        <img src={MyIcon} alt='My Icon' className='tamagoIcon'/>
      </div>

      <div className='myIntroduction'>
        JavaScriptなどのプログラミング言語を学んでいます。このページにはこれまでに作った作品や
        学んだことをまとめています。
      </div>
    </div>
  )
}

export default AboutMe
