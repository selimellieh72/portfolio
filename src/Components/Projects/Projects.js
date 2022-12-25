import React from "react";
import Project from "../Project/Project";
import "./Projects.scss";

const PROJECTS = [
  {
    name: "Distancia",
    description: "Digitalizing education",
    github_link: "https://github.com/selimellieh72/Distancia",
    technology: "JavaScript",
  },
  {
    name: "DistanciaMobile",
    description:
      "A cross-platform app implementation of Distancia ~ Digitalizing education",
    github_link: "https://github.com/selimellieh72/DistanciaMobile",
    technology: "Flutter",
  },
  {
    name: "SelimsErrorFinder",
    description:
      "A Python script that finds and fixes syntax errors in other Python scripts :D",
    github_link: "https://github.com/selimellieh72/selimserrorfinder",
    technology: "Python",
  },
  {
    name: "TicTactoeWeb",
    description: "Play TicTacToe against an unbeatable AI!",
    github_link: "https://github.com/selimellieh72/TicTacToeWeb",
    technology: "JavaScript",
  },
  {
    name: "My Plans",
    description:
      "A cross-platform app to manage your plans created with Flutter and Hive.",
    github_link: "https://github.com/selimellieh72/my-plans/",
    technology: "Flutter",
  },
];
export default function Projects() {
  return (
    <section id="projects">
      <h2 className="animateOpacity">Selected projects</h2>
      <div className="projects__list">
        {PROJECTS.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
