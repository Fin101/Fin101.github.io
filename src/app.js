import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'
// import App from './App';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
  render() {
    return (
      <div>
        <Hero Title="Finlay Whittington-Devereux" />
        <Navbar LogoTitle="" />
        <About />
        <Skills />
        <Banner />
        <Projects />
        <Footer />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
