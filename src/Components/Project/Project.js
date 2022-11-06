import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faFileCode} from '@fortawesome/free-solid-svg-icons'
import {faGithub,} from '@fortawesome/free-brands-svg-icons'
import './Projects.scss'

export default function Project({name, description, github_link, technology}) {
  return (
    <article className='project animateOpacity'>
        <div className='project__title'>
            <h4>{name}</h4>
            <span>{technology} <FontAwesomeIcon icon={faCode}/></span>
        </div>

        {/* <hr/> */}
    

        <p className='project__description'>
           {description}
        </p>

        <div className='spacer'></div>

        <a href={github_link} target='__blank'>
        <button  className='btn-primary'>Check on Github <FontAwesomeIcon icon={faGithub}/></button>
        </a>

    </article>
  )
}
