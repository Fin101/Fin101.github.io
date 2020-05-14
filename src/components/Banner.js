import React, { Component } from 'react'
import './Banner.css'
import Background from '../images/fez.jpeg'
// import useMediaQuery from '@material-ui/core/useMediaQuery'

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
      <section className="banner" style={myStyles}>

      </section>
    )
  }

}

export default Banner;