import React from 'react'

import './Header.scss';

export default function Header() {
  return (
    <header className='main-header'>
      <a href='#' className='header-brand'>Selim Ellieh</a>
      <nav className='main-nav'>
        <ul>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#about'>About</a></li>
        </ul>
      </nav>
    </header>
  )
}
