import Svg1 from "../svg-elenmt/Svg1.svg"
import Svg2 from "../svg-elenmt/Svg2.svg"
import Svg3 from "../svg-elenmt/Svg3.svg"
import Vector from "../icons/Vector.svg"
import Nexticon from "../icons/nexticone.svg"
import Previcon from "../icons/previcone.svg"
import SlidImg1 from "../img_slid/slidimg1.png"
import SlidImg2 from "../img_slid/slidimg2.png"
import SlidImg3 from "../img_slid/slidimg3.png"
import SlidImg4 from "../img_slid/slidimg4.png"
import Flechicone from "../icons/Flechicon.svg"
import Description1 from "../icons/description1.svg"
import Description2 from "../icons/description2.svg"
import Description3 from "../icons/description3.svg"
import Description4 from "../icons/description4.svg"
import Notsupport from "../icons/notsupport.svg"

import ImgPrince3 from "../img-prins/ImgPrince3.jsx"
import { NavLink } from "react-router-dom"
import "./Project_styly.css"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

function Project() {
  const [counter,setcounter]=useState(0)
  const [imgsrc,setimgsrc]=useState(SlidImg1)
  const [contentimg,setcontentimg]=useState(Description2)
  const chowimgproject=useRef()

  const nextfunc=()=>{
    if(counter<2){
      setcounter(prev=>prev+1)
    }else{
      setcounter(0)
    }
    
    
  }
  const prevfunc=()=>{
    if(counter>0){
    setcounter(prev=>prev-1)
  }else{
    setcounter(2)
  }
    
  }
  const slidfunc=(x)=>{
  
    setcounter(x.target.id)
    
  }
  const imgslidfunc=(x)=>{
  
    setimgsrc(x.target.src)
    setcontentimg(x.target.id)
    chowimgproject.current.style.display="flex"
  }
  const clospage=(x)=>{
    if(x.target.className=="chowimgproject"){
    
    x.target.style.display="none"
    }else if(x.target.className=="contentprojectshow"){
   
    }
  }


  return (
    <> 
    <span><img src={Svg2} alt="Svg2" /></span>
    <span><img src={Svg1} alt="Svg1" /></span>

    <span><img src={Svg3} alt="Svg3" /></span>
    <span><img src={Svg1} alt="Svg1" /></span>
    <motion.div className="contentconterin3"
    //  initial={{ opacity: 0, scale: 0.5 }}
    //  animate={{ opacity: 1, scale: 1 }}
    //  transition={{ duration: 0.5 }}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 150 }}>
      <div className="titlename"><div className="contextname"><h1>MY PROJECT </h1><div className="fechicn"><img src={Flechicone} alt="icone" /></div></div> </div>
      <div className="gettoTouch"><img src={Vector} alt="Vector" /> <h1><NavLink to="mailto:aymanbenchalh53@gmail.com">GET IN TOUCH</NavLink></h1></div>

      <ImgPrince3 />

     <div className="containerslide">
      <div  className="slide_Content">
        <div className="btnnext" onClick={nextfunc}><img loading="lazy" src={Nexticon} alt="iconebtn" /></div>
        <div className="contentbar" >
          <div className="slid slid1" style={(counter==0)?{zIndex:"9999",scale:"1.0" ,opacity:"1"}:{zIndex:"0",scale:".5",opacity:"0"}}>
            <div className="slidcontsnt1">
          
              <div className="party1" onClick={imgslidfunc}><img loading="lazy" src={SlidImg1} id={Description1} alt="img" /></div>
              <div className="party2" onClick={imgslidfunc}><img  loading="lazy"src={SlidImg2} id={Description3}alt="img" /></div>
            </div>
          </div>
          <div className="slid slid2" style={(counter==1)?{zIndex:"9999",scale:"1.0",opacity:"1"}:{zIndex:"0",scale:".5",opacity:"0"}}>
          <div className="slidcontsnt2">
              <div className="party1" onClick={imgslidfunc}><img loading="lazy" src={SlidImg3} id={Description2} alt="img" /></div>
              <div className="party2"onClick={imgslidfunc}><img loading="lazy" src={SlidImg4} id={Description4} alt="img" /></div>
            </div>
          </div>
          <div className="slid slid3"style={(counter==2)?{zIndex:"9999",scale:"1.0",opacity:"1"}:{zIndex:"0",scale:".5",opacity:"0"}}>
          <div className="slidcontsnt3">
              <div className="party1" onClick={imgslidfunc}><img loading="lazy" src={SlidImg2} id={Description3} alt="img" /></div>
              <div className="party2" onClick={imgslidfunc}><img loading="lazy" src={SlidImg1} id={Description1} alt="img" /></div>  
            </div>
          </div>
        </div>
        <div className="btnprev" onClick={prevfunc}><img src={Previcon} alt="iconebtn" /></div>
        <div className="barpagiton">
          <div className="bar bar1" onClick={slidfunc} id="0"  style={(counter==0)?{backgroundColor:"#D59300"}:{backgroundColor:"rgba(255, 255, 255, 0.70)"}}></div>
          <div className="bar bar2" onClick={slidfunc} id="1" style={(counter==1)?{backgroundColor:"#D59300"}:{backgroundColor:"rgba(255, 255, 255, 0.70)"}}></div>
          <div className="bar bar3" onClick={slidfunc} id="2" style={(counter==2)?{backgroundColor:"#D59300"}:{backgroundColor:"rgba(255, 255, 255, 0.70)"}}></div>
        </div>
       
    </div> 
   
     </div>  
     <div className="chowimgproject" onClick={clospage} ref={chowimgproject}>
          <div className="contentprojectshow" >
            <div className="imgprinspl"><div className="cader"><img src={imgsrc} alt="img" /></div> </div>
            <div className="line"></div>
           <div className="partydescipt">
              <img src={contentimg} alt="img" />
            </div>
          </div>
      </div>
      <div className="notsupport" >
<img src={Notsupport} alt="notsupprt" />
  </div>
    </motion.div>
   

    </> 

  )
}

export default Project
