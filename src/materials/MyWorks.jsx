import React from 'react'
import MyIcon from '../images/myicon2.png';
import Humberger from "../images/humberger.png";
import Sea from "../images/sea.png";
import Desk from "../images/desk.png";

const MyWorks = () => {
  return (
    <div className='myWorks'>
      <div className='titleOfMyWorks'>
        私の作品
      </div>

      <div className='WorkSection'>1.Web Pages</div>
      <ul className="worksList">
        <li>
            <div className='url'>
                <a href='https://tamago0926.github.io/Neo.Web/'>Neo.Web(オンラインテトリスネオ大会用サイト)</a>
            </div>
            <div className='information'>
                オンラインテトリスネオの大会用に作ったサイトです。始めて作ったものなので、UIなどがかなり粗いです。
            </div>
        </li>

        <li>
            <div className='url'>
                <a href='https://tamago0926.github.io/EnglishWords/'>英単語学習サイト</a>
            </div>
            <div className='information'>
                英語のモチベーション向上のために作った英単語学習サイトです。気が向いたら新たな機能を作るかもしれません。
            </div>
        </li>
        
        {/*<li>
            <div className='url'>
                <a href=''></a>
            </div>
            <div className='information'>
            </div>
        </li>*/}
      </ul>

      <div className='WorkSection'>2.Blender</div>
      <ul className="worksList2">
        <li>
            <img src={MyIcon} className='blenderImg' />
            <div className='information'>
                Blenderで作ったアイコンです。テトリスが好きなので、テトリスのTミノをモチーフにしています。
            </div>
        </li>
        <li>
            <img src={Humberger} className='blenderImg' />
            <div className='information'>
                ハンバーガーの3Dモデルです。Blenderを始めたばかりの頃に作りました。
            </div>
        </li>
        <li>
            <img src={Sea} className='blenderImg' />
            <div className='information'>
                海の3Dモデルです。Blenderの練習用に作りました。
            </div>
        </li>
        <li>
            <img src={Desk} className='blenderImg' />
            <div className='information'>
                机の3Dモデルです。Blenderの練習用に作りました。
            </div>
        </li>
      </ul>
    </div>
  )
}

export default MyWorks
