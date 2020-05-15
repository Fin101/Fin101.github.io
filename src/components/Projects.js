import React, { Component } from 'react'
import './Projects.css'
import Slider from 'infinite-react-carousel'
import nutrifix from '../images/nutrifix-project.png'
import devtru from '../images/devtru-project.png'
import game from '../images/game.png'
import travelLog from '../images/travellog.png'
import cocktail from '../images/cocktailapp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'


class Projects extends Component {

  render() {
    return (
      <section className="projectsSection">
        <h2>Projects</h2>
        <Slider dots>
          <div className="projectCard">
            <h3>NutriFix</h3>
            <h4>Group project</h4>
            <img src={nutrifix} alt="" />
            <p>For the Nutrifix project, I worked together in a group of four. Due to the COVID-19 lockdown,we were faced with the additional challenge of working from a remote environment, furthertesting our communication collaborative skills as a team. We created a recipe app, whereusers could log in/register, and browse through their favourite recipes using the ‘filter tags’(e.g. vegetarian, meat, dairy free, etc.). As a stretch goal, users were also able to add their ownrecipes to their profile.</p>
            <p>We used Express and MongoDB frameworks for developing a back end, and React.js andBulma for the front end. We made sure to spend time designing and mapping out what we’drequire for our schemas and core functionalities before diving into writing any code. We tookcare in delegating each task as to not be writing conflicting code. We pushed regularly toGitHub and kept in constant communication, updating the team on each input.</p>
            <p>I was  predominantly  responsible  for  the  site  navigation  and  developing  the  single-recipepages, as well as styling and various collective backend challenges we debugged as a group.</p>
            <a href="https://nutrifixrecipes.herokuapp.com">
              <FontAwesomeIcon className="icon" icon={faLink} size="2x" color="black" />
            </a>
            <a href="https://github.com/Fin101/project3">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x" color="black" />
            </a>
          </div>
          <div className="projectCard">
            <h3>DevTru</h3>
            <h4>Paired project</h4>
            <img src={devtru} alt="" />
            <p>I was tasked with building a React application that consumed a public API. The Deezer APIprovided me with all the data I needed to build the app, using axios requests to multipleendpoints. I created a music-based app where users could search/filter through thousands ofartists, albums or song titles and stream short previews - a not dissimilar concept to Spotify orDeezer. We used the CSS framework, Bulma, to aid in building this web app.</p>
            <a href="https://fin101.github.io/Project2/">
              <FontAwesomeIcon className="icon" icon={faLink} size="2x" color="black" />
            </a>
            <a href="https://github.com/Fin101/project2">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x" color="black" />
            </a>
          </div>
          <div className="projectCard">
            <h3>Rick & Morty Game</h3>
            <h4>Solo project</h4>
            <img src={game} alt="" />
            <p>Used HTML, CSS, and JavaScript to create a grid-based game that emulated the classic videogame ‘frogger’ with a ‘Rick & Morty’ twist. Your ‘Morty’ would quickly and strategicallymaneuver around the grid collecting ‘dragon-balls’, accumulating points, whilst avoidingcollisions with oncoming spaceships.</p>
            <a href="https://github.com/Fin101/Frogger-Game-Project">
              <FontAwesomeIcon className="icon" icon={faLink} size="2x" color="black" />
            </a>
            <a href="https://github.com/Fin101/Frogger-Game-Project">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x" color="black" />
            </a>
          </div>
          <div className="projectCard">
            <h3>Cocktail App</h3>
            <h4>Solo project</h4>
            <img src={cocktail} alt="" />
            <p>Using Insomnia, I extracted data from the cocktail db API and created a simple app where users could browse through hundreds of cocktails via a search bar. The app returned instructions on how to make the cocktail, the ingredients required, and a tastful image. Bulma was used to assist with the styling.</p>
          </div>
          <div className="projectCard">
            <h3>Travel Log App</h3>
            <h4>Solo project</h4>
            <img src={travelLog} alt="" />
            <p>The concept behind travel log app allows users to register, creating their own profile, where they can check off and track all of their previous travel destinations. This is a full-stack application built using the Django REST framework with a PostgreSQL database and a React front-end.</p>
            <p>I'm continueing to work on the travel log app to resolve the remaining issues I've had with the user's profile and look forward to showcasing the finished product!</p>
            <a href="https://fins-backpacker-app.herokuapp.com/#/searchlocation">
              <FontAwesomeIcon className="icon" icon={faLink} size="2x" color="black" />
            </a>
            <a href="https://github.com/Fin101/project4">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x" color="black" />
            </a>
          </div>
        </Slider>
      </section>
    )
  }

}

export default Projects