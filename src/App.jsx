import React, { useEffect } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skill'
import Contact from './Components/Contact'

const App = () => {

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App