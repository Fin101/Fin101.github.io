import React, { Component } from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Skills extends Component {

  render() {
    return (
      <section className="skillsSection">
        <h2>Skills</h2>
        <div className="skill-icons">
          <div className="skil-icons-row">
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
          <div className="skil-icons-row">
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
          </div>
        </div>
      </section>
    )
  }

}

export default Skills