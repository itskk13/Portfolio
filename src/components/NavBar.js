import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './NavBar.css';
import * as SiIcons from 'react-icons/si';


function NavBar() {
  const [sidebar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sidebar);
  return (

    <>
    <div style={{color:'#fff'}} id='home'>
      <div className='navbar'>
        <section className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </section>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <h1 className='brand'>Itskk13</h1>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <section to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </section>
          </li>
          <li className='nav-text'><a href='#home'><AiIcons.AiFillHome className='nav-icons'/> Home </a></li>
          <li className='nav-text'><a href='#projects'><AiIcons.AiFillProject className='nav-icons'/> Projects</a></li>
          <li className='nav-text'><a href='#about'><SiIcons.SiAboutDotMe className='nav-icons'/> About</a></li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default NavBar;
