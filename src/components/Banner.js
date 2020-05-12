import React, { Component } from 'react';
import './Banner.css';
import Background from '../images/fez.jpeg'

const myStyles = {
  'backgroundImage': `url(${Background})`,
  'height': '60vh',
  'backgroundSize': 'cover',
  'backgroundPosition': 'center',
  'backgroundRepeat': 'no-repeat',

  'backgroundAttachment': 'fixed'
}

class Banner extends Component {

  render() {
    return (
      <section style={myStyles}>

      </section>
    )
  }

}

export default Banner;