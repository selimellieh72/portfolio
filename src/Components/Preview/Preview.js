import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'

import './Preview.scss';

export default function Preview() {
  return (
    <section id='preview'>
      <h1 className='typewriter'>Hi, I am <span>Selim</span>!</h1>
      
      <br/>
      <em>Specialized in full stack web development</em>
      
      <div style={{backgroundImage: `url(/profile.jpg)`}} className='avatar animateOpacity'></div>
     <a href='/CV.pdf' target='_blank'>
         <button className='btn-secondary animateOpacity'>Check CV <FontAwesomeIcon icon={faFile}/></button>
     </a>
     <a href='https://github.com/selimellieh72' target='_blank'>
     <button className='btn-primary animateOpacity'>Check GitHub <FontAwesomeIcon icon={faGithub}/></button>
     </a>
      
    </section>
  )
}
