import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Projects'
import Project from './pages/Project';
function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
