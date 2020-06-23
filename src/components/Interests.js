import React, { Component } from 'react'
import './Interests.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGlobeEurope, faFutbol, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons'



class Interests extends Component {

  render() {
    return (
      <section className="interestsSection">
        <h2>Hobbies & Interests</h2>
        <p>I’m a keen sportsman - both as aplayer and spectator. My main sporting interests include football, golf, cricket & tennis. I play for a local Sunday football team on the weekends.</p>
        <p>When I’m not playing or watching sports, you’ll likely find me immersed in a good book - often something anthropological, drawing comparisons from our prehistoric ancestors, fantasizing about living in a simpler time - or halfway through a 12hr Lord of theRings marathon.</p>
        <p>Such as Mr Frodo perhaps, I’d certainly say I have an impulsive sense of wanderlust. Always looking to squeeze in little adventures as far as my time and budget will allow me.</p>
        <div className="skill-icons-row">
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faBook} size="3x" />
            <h4>Reading</h4>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faGlobeEurope} size="3x" />
            <h4>Travel</h4>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faFilm} size="3x" />
            <h4>Film</h4>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faFutbol} size="3x" />
            <h4>Sports</h4>
          </div>
          {/* <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faGolfBall} size="4x" />
            <h4>Golf</h4>
          </div> */}
          <div className="icon-container">
            <FontAwesomeIcon className="icon" icon={faGamepad} size="3x" />
            <h4>Gaming</h4>
          </div>
        </div>
      </section>
    )
  }

}

export default Interests