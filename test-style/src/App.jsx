import './App.css'
import {Routes,Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {
  

  return (
  <>
  <Sidebar/>
  <Routes>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/skills' element={<Skills/>}/>
    <Route exact path='/' element={<About/>}/>
  </Routes>
  </>
  )
}

export default App
