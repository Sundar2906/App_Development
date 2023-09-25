import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Home from './pages/Home'
import WateringSchedule from './pages/WateringSchedule'
import Intro from './pages/Intro'
import WeatherApp from './pages/weather'
import PlantIdentification from './pages/PlantIdentification'
// import Results from './pages/results'
import Pp from './pages/pp'
import Faq from './pages/Faq'
import PlantGallery from './pages/My-plants'
import Results from './pages/results'



function App() {
  return (
   <>
   <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Users' element={<PlantIdentification/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    <Route exact path='/Watering' element={<WateringSchedule/>}/>
    <Route exact path='/Intro' element={<Intro/>}/>
    <Route exact path='/privacy-policy' element = {<Pp />}></Route>
    <Route exact path='/about-us' element = {<Faq />}></Route>
    <Route exact path='/gal' element = {<PlantGallery />}></Route>
    <Route exact path='/weather' element = {<WeatherApp />}></Route>
    <Route exact path='/res' element = {<Results />}></Route>

   </Routes>
   
   </>
  )
}

export default App