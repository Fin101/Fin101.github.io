import React, { Component } from 'react'
import './Interests.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGlobeEurope, faFutbol, faGolfBall, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons'



class Interests extends Component {

  render() {
    return (
      <section className="interestsSection">
        <h2>Hobbies & Interests</h2>
        <p>I’m a keen sportsman - both as aplayer and spectator. My mainsporting interests include football,golf, cricket & tennis. I play for alocal Sunday football team on the weekends.</p>
        <p>When I’m not playing or watchingsports, you’ll likely find meimmersed in a good book - likelysomething anthropological,drawing comparisons from ourprehistoric ancestors, fantasizingabout living in a simpler time - orhalfway through a 12hr Lord of theRings marathon.</p>
        <p>Such as Mr Frodo perhaps, I’dcertainly say I have an impulsivesense of wanderlust. Alwayslooking to squeeze in little adventures as far as my time andbudget will allow me</p>
        <div className="skill-icons-row">
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faBook} size="4x" />
            <h4>Reading</h4>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faGlobeEurope} size="4x" />
            <h4>Travel</h4>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faFilm} size="4x" />
            <h4>Film</h4>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faFutbol} size="4x" />
            <h4>Sports</h4>
          </div>
          {/* <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faGolfBall} size="4x" />
            <h4>Golf</h4>
          </div> */}
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faGamepad} size="4x" />
            <h4>Gaming</h4>
          </div>
        </div>
      </section>
    )
  }

}

export default Interests