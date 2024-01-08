import './App.css'
import Home from "./component/Home"
import Project from './component/Project'
import Skills from './component/Skills'
import Certificat from './component/Certificat'
import Navbar from "./component/Navbar"
import Notfound from "./component/Notfound"
import { BrowserRouter,Routes , Route} from 'react-router-dom'



function App() {

  return (
   
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<Navbar/>}>
          <Route index  element={<Home/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Certificat' element={<Certificat/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
