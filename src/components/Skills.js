import React, { Component } from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Skills extends Component {

  render() {
    return (
      <section className="skillsSection">
        <h2>Skills</h2>
        <div className="skill-icons">
          <div className="skill-icons-row">
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'react']} size="6x" />
              <h4>React</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="6x" />
              <h4>GitHub</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'html5']} size="6x" />
              <h4>HTML5</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'js']} size="6x" />
              <h4>JavaScript</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'unity']} size="6x" />
              <h4>Unity</h4>
            </div>
          </div>
          <div className="skill-icons-row">
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'apple']} size="6x" />
              <h4>Apple IOS</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'css3']} size="6x" />
              <h4>CSS3</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'npm']} size="6x" />
              <h4>npm</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'yarn']} size="6x" />
              <h4>yarn</h4>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="icon" icon={['fab', 'python']} size="6x" />
              <h4>Python</h4>
            </div>

            {/* <div className="icon-container">
              <h4>C#</h4>
            </div>
            <div className="icon-container">
              <h4>Bulma</h4>
            </div>
            <div className="icon-container">
              <h4>jQuery</h4>
            </div>
            <div className="icon-container">
              <h4>Visual Studio Code</h4>
            </div>
            <div className="icon-container">
              <h4>Insomnia</h4>
            </div>
            <div className="icon is-large fas fa-3x">
              <h4>Mongo</h4>
            </div>
            <div className="icon-container">
              <h4>Django</h4>
            </div>
            <div className="icon-container">
              <h4>PostgreSQL</h4>
            </div>
            <div className="icon-container">
              <h4>TablePlus</h4>
            </div> */}
          </div>
          <div className="skill-icon-row">
            <h4 className="skill-list">C# | Bluma | jQuery | Visual Studio Code | Insomnia | Mongo | Django | PostgreSQL | TablePlus</h4>
          </div>
        </div>
      </section>
    )
  }

}

export default Skills