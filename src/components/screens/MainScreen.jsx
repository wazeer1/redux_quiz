import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import QuizMainScreen from './QuizMainScreen'
import StartScreen from './StartScreen'

const MainScreen = () => {
    const counter = useSelector(state =>state.counter)
  return (
    <div>
        <Routes>
            <Route path="/" element={<StartScreen/>}/>
            <Route path='start' element={<QuizMainScreen/>}/>
        </Routes>
        {/* <StartScreen/> */}
    </div>
  )
}

export default MainScreen