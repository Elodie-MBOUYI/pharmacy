import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Pharms from './components/Pharms'
import Navbar from './components/Navbar'
import Degarde from './components/Degarde'
import Rubriquec from './components/Rubriquec'
import Pharmacies from './components/Pharmacies'
import Contact from './components/Contact'
import Banco from './components/Banco'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/pharms" element={<Pharms/>} />
        <Route  path="/degarde" element={<Degarde/>} />
        <Route  path="/rubriquec" element={<Rubriquec/>} />
        <Route  path="/pharmacies" element={<Pharmacies/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/banco" element={<Banco/>} />
      </Routes>
    </div>
  );
}


export default App;