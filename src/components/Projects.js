import React, { Component } from 'react'
import './Projects.css'
import Slider from 'infinite-react-carousel'
import nutrifix from '../images/nutrifix-project.png'
import devtru from '../images/devtru-project.png'
import game from '../images/game.png'

class Projects extends Component {

  render() {
    return (
      <section className="projectsSection">
        <h2>Projects</h2>
        <Slider dots>
          <div className="projectCard">
            <h3>NutriFix</h3>
            <h4>Group project</h4>
            <p>A recipe app, where users can log in/register, and browse through their favourite recipes.</p>
            <img src={nutrifix} alt="" />
          </div>
          <div className="projectCard">
            <h3>DevTru</h3>
            <h4>Paired project</h4>
            <p>A music app, where users can search their favourite songs, artists or albums and stream preview audio clips</p>
            <img src={devtru} alt="" />
          </div>
          <div className="projectCard">
            <h3>Rick & Morty Game</h3>
            <h4>Solo project</h4>
            <p>Using HTML, CSS, and JavaScript, I created a unique 'Rick & Morty' grid-based game.</p>
            <img src={game} alt="" />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
      </section>
    )
  }

}

export default Projects