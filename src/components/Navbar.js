import React, { Component } from 'react'
import './Navbar.css'
import Background from '../images/navbar.jpeg'

const myStyles = {
  'backgroundImage': `url(${Background})`
  // 'height': '8vh'
}

class Navbar extends Component {
  render() {

    const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact']
    const navLinks = sections.map(section => <li key={section.id}><a href={'#' + section}>{section}</a></li>)

    return (
      <nav style={myStyles}>
        {/* <h2 className="logo">{this.props.LogoTitle}</h2>
        <ul className="">
          {navLinks}
        </ul> */}
      </nav>
    )
  }
  
}

export default Navbar