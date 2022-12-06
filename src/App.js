//components
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Cursor } from './components/Cursor/Cursor'
import Education from './components/Education/Education'
import Project from './components/Project/Project'

//library
import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import gsap from 'gsap'

//style
import './App.css'

//chakra
import { extendTheme } from '@chakra-ui/react'

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Poppins'`,
      body: `'Roboto Mono'`,
    },
  })
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      console.log(mouseX, mouseY)

      gsap.to('.shape', {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      })

      gsap.to('.cursor', {
        x: mouseX,
        y: mouseY,
      })
    })
  })
  return (
    <ChakraProvider theme={theme}>
      <div className='App'>
        <Cursor />
        <Navbar />
        <Home />
        <Education />
        <Project />
      </div>
    </ChakraProvider>
  )
}

export default App
