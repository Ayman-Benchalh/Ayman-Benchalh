import Svg1 from "../svg-elenmt/Svg1.svg"
import Svg2 from "../svg-elenmt/Svg2.svg"
import Svg3 from "../svg-elenmt/Svg3.svg"
import Vector from "../icons/Vector.svg"
import Iconsmsg from "../icons/Iconemsg.svg"
import Notsupport from "../icons/notsupport.svg"

import ImgPrince2 from "../img-prins/imgPrince2.jsx"
import { NavLink } from "react-router-dom"

import { motion } from "framer-motion"
import "./Styly_Skills.css"
function Skills() {

const getcaluproge=()=>{
 
}
getcaluproge()
  return (

    <>
      <span><img src={Svg2} alt="Svg2" /></span>
      <span><img src={Svg1} alt="Svg1" /></span>

      <span><img src={Svg3} alt="Svg3" /></span>
      <span><img src={Svg1} alt="Svg1" /></span>
      <motion.div className="contentconterin"
        initial={{ opacity: 0.5, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 150 }}>
        <div className="gettoTouch"><img src={Vector} alt="Vector" /> <h1><NavLink to="mailto:aymanbenchalh53@gmail.com">GET IN TOUCH</NavLink></h1></div>

        <ImgPrince2 />

        <div className="SkillsContainer">
          <div className="titles"><h1>MY SKILLS</h1></div>
          <div className="contentskls">
            <div className="party1">
              <div className="titleLangue">PROGREMMING LANGUAGE</div>
              <div className="contentValue">
                <div className="titlevalue">PYTHON</div>
                <div className="valueparty"><label ><progress value="80" max="100" className="progress"></progress> <div className="Icons" style={{left:"75%"}}><img src={Iconsmsg} alt="img" /><div className="number" >80%</div></div></label></div>

              </div>
              <div className="contentValue">
                <div className="titlevalue">HTML & css</div>
                <div className="valueparty"><label ><progress value="85" max="100" className="progress"></progress> <div className="Icons"  style={{left:"80%"}}><img src={Iconsmsg} alt="img" /><div className="number">85%</div></div> </label></div>

              </div>
              <div className="contentValue">
                <div className="titlevalue">JAVASCRIPT</div>
                <div className="valueparty"><label ><progress value="80" max="100" className="progress"></progress> <div className="Icons" style={{left:"75%"}}><img src={Iconsmsg} alt="img" /><div className="number">80%</div></div></label></div>

              </div>
              <div className="contentValue">
                <div className="titlevalue">UI DESING FIGMA</div>
                <div className="valueparty"><label ><progress value="85" max="100" className="progress"></progress> <div className="Icons" style={{left:"80%"}}><img src={Iconsmsg} alt="img" /><div className="number">85%</div></div></label></div>

              </div>
              <div className="contentValue">
                <div className="titlevalue">PHP</div>
                <div className="valueparty"><label ><progress value="70" max="100" className="progress"></progress> <div className="Icons" style={{left:"65%"}}><img src={Iconsmsg} alt="img" /><div className="number">70%</div></div></label></div>

              </div>
            </div>
            <div className="party2">
              <div className="titleLangue">FRAMEWORK & LIBRARIES</div>
              <div className="contentValue">
                <div className="titlevalue">REACT JS</div>
                <div className="valueparty"><label ><progress value="70" max="100" className="progress"></progress> <div className="Icons" style={{left:"65%"}}><img src={Iconsmsg} alt="img" /><div className="number">70%</div></div></label></div>
              </div>
              <div className="contentValue">
                <div className="titlevalue">BOOTSTRAP np CSS</div>
                <div className="valueparty"><label ><progress value="50" max="100"className="progress"></progress> <div className="Icons" style={{left:"45%"}}><img src={Iconsmsg} alt="img" /><div className="number">50%</div></div></label></div>
              </div>
            </div>
          </div>
      
      
     </div>     
     <div className="notsupport" >
            <img src={Notsupport} alt="not support" />
          

       </div>
      </motion.div>


    </>

  )
}

export default Skills
