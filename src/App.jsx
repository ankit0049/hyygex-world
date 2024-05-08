import { useState } from 'react'

import Header from './components/Header.jsx'
import Flashcard from './components/Flashcard.jsx'
import FAQSection from './components/FAQ.jsx'
import { useSelector } from 'react-redux'

function App() {

  return (
  
      <div className=''> 
         <Header></Header> 
        <Flashcard></Flashcard> 
        <FAQSection></FAQSection>
    </div>
  )
}

export default App
