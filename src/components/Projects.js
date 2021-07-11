import React from 'react';
import './Main.css';
import data from '../Data';

const Projects = () => {
  return (
    <>
    <div className='project-heading-div' id='projects'>
     <p className='project-heading'>Projects</p>
    </div>
     <div className='projects' id='projects' data-aos='zoom-in'>
          {
            data.map((item) => {
              return (
                <div className='project-card' key={item.id}>
                  <a href={item.url}><img className='img' src={item.img} alt='project1' /></a>
                  <p className='project-title'>{item.title}</p>
                </div>
              )
            })
          }
     </div> 
    </>
  )
}

export default Projects;
