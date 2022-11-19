import React from 'react'
import Project from '../Project/Project'
import './Projects.scss'

const PROJECTS = [
    {name: 'DistanciaMobile', description: 'Digitalizing education', github_link: 'https://github.com/selimellieh72/DistanciaMobile', technology: 'Flutter'},
    {name: 'TicTactoeWeb', description: 'Play TicTacToe against an unbeatable AI!', github_link: 'https://github.com/selimellieh72/TicTacToeWeb', technology: 'JavaScript'},
    {name: 'My Plans', description: 'A cross-platform app to manage your plans created with Flutter and Hive.', github_link: 'https://github.com/selimellieh72/my-plans/', technology: 'Flutter'},
    {name: 'Project', description: 'Digitalizing education'}
]
export default function Projects() {
  return (
    <section id='projects'>
        <h2 className='animateOpacity'>Selected projects</h2>
        <div className='projects__list'>
        {PROJECTS.map((project, index) => <Project key={index} {...project} />)}
        </div>

    </section>
  )
}
