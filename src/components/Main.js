import React from 'react';
import './Main.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
import {RiLinkedinFill} from 'react-icons/ri';

const Main = () => {
  return (
    <>
    <div className='main'>
      <h1 className='name'>Krishnakant Kushwaha</h1>
      <p className='title'>Front-end Developer</p>
      <p className='tag'>Let's Fill The Web With Some Beautiful Websites</p>
      <div className='icons'>
        <a href='https://instagram.com/krishnakant_kushwaha_?utm_medium=copy_link' ><AiOutlineInstagram className='icon'/></a>
        <a href='https://github.com/itskk13' ><FiGithub className='icon'/></a>
        <a href='https://www.linkedin.com/in/krishnakant-kushwaha-a37b17214' ><RiLinkedinFill className='icon'/></a>
        
      </div>
    </div>
    </>
  )
}

export default Main
