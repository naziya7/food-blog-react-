import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer'
import Articles from './components/Articles'
import About from './components/About'
import Landing from './components/Landing'
const App = () => {
  return (
    <div>
    <ChakraProvider>
    <Landing/>
      <About/>
      <Articles/>
      <Footer/>
    </ChakraProvider>
      
    </div>
  )
}

export default App
