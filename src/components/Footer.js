import React, { Component } from 'react';
import './Footer.css';
import Background from '../images/footer.png'

const myStyles = {
  'backgroundImage': `url(${Background})`,
  'height': '55vh',
  'backgroundSize': 'cover',
  'backgroundPosition': 'center center',
  'backgroundRepeat': 'no-repeat',
}

class Footer extends Component {

  render() {
    return (
      <header style={myStyles}>
    
      </header>
    )
  }

}

export default Footer;