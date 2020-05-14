import React, { Component } from 'react'
import './Hero.css'
import Background from '../images/fez-background.jpeg'

const myStyles = {
  'backgroundImage': `url(${Background})`,
  'height': '100vh',
  // 'backgroundSize': 'cover',
  // 'backgroundPosition': 'center center',
  // 'backgroundRepeat': 'no-repeat',
  
  /* Create the parallax scrolling effect */
  'backgroundAttachment': 'fixed',
  'backgroundPosition': 'center',
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'cover'
}

class Hero extends Component {

  render() {
    return (
      <header style={myStyles}>
        <div>
          <h1 className="hero-heaeder">{this.props.Title}</h1>
          <p className="hero-subheaeder">Junior Game & Web Developer</p>
        </div>
      </header>
    )
  }

}

export default Hero