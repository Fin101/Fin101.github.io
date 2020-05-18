import React, { Component } from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Devicon from 'react-devicon'

class Skills extends Component {

  render() {
    return (
      <section className="skillsSection">
        <h2>Skills</h2>
        <div className="skill-icons">
          <div className="skill-icons-row">
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'react']} size="4x" />
              <h4>React</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'react']} size="3x" />
              <h4>React</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="4x" />
              <h4>GitHub</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="3x" />
              <h4>GitHub</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'html5']} size="4x" />
              <h4>HTML5</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'html5']} size="3x" />
              <h4>HTML5</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'js']} size="4x" />
              <h4>JavaScript</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'js']} size="3x" />
              <h4>JavaScript</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'unity']} size="4x" />
              <h4>Unity</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'unity']} size="3x" />
              <h4>Unity</h4>
            </div>
          </div>
          <div className="skill-icons-row">
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'apple']} size="4x" />
              <h4>Apple IOS</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'apple']} size="3x" />
              <h4>IOS</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'css3']} size="4x" />
              <h4>CSS3</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'css3']} size="3x" />
              <h4>CSS3</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'npm']} size="4x" />
              <h4>npm</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'npm']} size="3x" />
              <h4>npm</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'yarn']} size="4x" />
              <h4>yarn</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'yarn']} size="3x" />
              <h4>yarn</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'python']} size="4x" />
              <h4>Python</h4>
            </div>
            <div className="mobile-icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'python']} size="3x" />
              <h4>Python</h4>
            </div>
          </div>
          <div className="skill-icons-row">
            <div className="icon-container">
              <i className="icon2 devicon-c-plain" style={{ 'font-size': '4rem' }}></i>
              <h4>C</h4>
            </div>
            <div className="mobile-icon-container">
              <i className="icon2 devicon-c-plain" style={{ 'font-size': '3rem' }}></i>
              <h4>C</h4>
            </div>
            <div className="icon-container">
              <i className="icon2 devicon-django-plain" style={{ 'font-size': '4rem' }}></i>
              <h4>Django</h4>
            </div>
            <div className="mobile-icon-container">
              <i className="icon2 devicon-django-plain" style={{ 'font-size': '3rem' }}></i>
              <h4>Django</h4>
            </div>
            <div className="icon-container">
              <i className="icon2 devicon-heroku-plain" style={{ 'font-size': '4rem' }}></i>
              <h4>Heroku</h4>
            </div>
            <div className="mobile-icon-container">
              <i className="icon2 devicon-heroku-plain" style={{ 'font-size': '3rem' }}></i>
              <h4>Heroku</h4>
            </div>
            <div className="icon-container">
              <i className="icon2 devicon-babel-plain" style={{ 'font-size': '4rem' }}></i>
              <h4>Babel</h4>
            </div>
            <div className="mobile-icon-container">
              <i className="icon2 devicon-babel-plain" style={{ 'font-size': '3rem' }}></i>
              <h4>Babel</h4>
            </div>
            <div className="icon-container">
              <i className="icon2 devicon-postgresql-plain" style={{ 'font-size': '4rem' }}></i>
              <h4>PostgreSQL</h4>
            </div>
            <div className="mobile-icon-container">
              <i className="icon2 devicon-postgresql-plain" style={{ 'font-size': '3rem' }}></i>
              <h4>PostgreSQL</h4>
            </div>
          </div>
          <div className="skill-icon-row">
            <h4 className="skill-list">Bluma | jQuery | Visual Studio Code | Insomnia | Mongo | TablePlus</h4>
          </div>
        </div>
      </section>
    )
  }

}

export default Skills