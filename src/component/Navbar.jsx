import {NavLink, Outlet}from "react-router-dom"
import Homesvg from "../icons/Home.svg"
import icone2 from "../icons/Rectangle 82.png"
import icone3 from "../icons/Rectangle 84.png"
import icone4 from "../icons/Rectangle 85 (1).png"



function Navbar() {
  return (
    <div className="containerTotal">
      <nav className="containerNAV">
        <ul>
            <li><NavLink to="/"><img src={Homesvg} alt="icon" /></NavLink></li>
            <li><NavLink to="Project"><img src={icone2} alt="icon" /></NavLink></li>
            <li><NavLink to="Skills"><img src={icone3} alt="icon" /></NavLink></li>
            <li><NavLink to="Certificat"><img src={icone4} alt="icon" /></NavLink></li>
        </ul>
    </nav>
    <div className="container"><Outlet/></div>
  
         
    </div>
  )
}

export default Navbar