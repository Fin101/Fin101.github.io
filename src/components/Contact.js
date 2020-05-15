import React, { Component } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {

  render() {
    return (
      <section className="contactSection">
        <h2>Contact Me</h2>
        <div className="contact-info-container">
          <div className="contact-info">
            <a href="https://github.com/Fin101/">
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} size="2x" color="black" />
            </a>
            <p>github.com/Fin101</p>
          </div>
          <div>
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/finlay-whittington-devereux/">
                <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} size="2x" color="black" />
              </a>
              <p>linkedin.com/in/finlay-whittington-devereux</p>
            </div>
          </div>
          <div>
            <div className="contact-info">
              <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="2x" />
              <p>fin.whittington1@gmail.com</p>
            </div>
          </div>
        </div>

      </section>
    )
  }

}

export default Contact