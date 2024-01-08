import Svg1 from "../svg-elenmt/Svg1.svg"
import Svg2 from "../svg-elenmt/Svg2.svg"
import Svg3 from "../svg-elenmt/Svg3.svg"
import Vector from "../icons/Vector.svg"

import Flechicone from "../icons/Flechicon2.svg"
import nextbtnicons from "../icons/nextbtnicons.svg"
import prevbtnicons from "../icons/prevbtnicons.svg"
import Certfi1 from "../allcartifi/Certfi1.png"
import Certfi2 from "../allcartifi/Certfi2.png"
import Certfi3 from "../allcartifi/Certfi3.png"
import Certfi4 from "../allcartifi/Certfi4.png"
import Certfi5 from "../allcartifi/Certfi5.png"
import Notsupport from "../icons/notsupport.svg"

import "./Styly_Certificat.css"

import ImgPrince3 from "../img-prins/ImgPrince4.jsx"

import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
function Certificat() {
  const [counter ,setcounter]=useState(5)
  const [viewimg ,setviewimg]=useState(Certfi5)
  const img = useRef()

  const switchimgnext=()=>{

    if(counter<5){ 
     
      return setcounter(prev=>prev+1)
      
    }else{
      
      return setcounter(1) 
    }
   
    
   
  }

  const switchimgprev=()=>{
    
    if(counter>1){
      
      return setcounter(prev=>prev-1)
    }else{
     
      return setcounter(5) 
    }

    
    
  }

 
  const hanldingimg =()=>{
   
    
    if (counter == 1) {
      img.current.style.transform="scale(0.7)"
      img.current.style.transition="all 0.5s ease"
    setTimeout(()=>{
      img.current.style.transform="scale(1)"
      setviewimg(Certfi1)}
      ,1000)
      
      
    } else if (counter == 2) {
      img.current.style.transform="scale(0.7)"
      img.current.style.transition="all 0.5s ease"
      setTimeout(()=>{
        img.current.style.transform="scale(1)"
        setviewimg(Certfi2)
      }
        ,1000)
      
    
    } else if (counter == 3) {
      img.current.style.transform="scale(0.7)"
      img.current.style.transition="all 0.5s ease"
      setTimeout(()=>{
      img.current.style.transform="scale(1)"
      setviewimg(Certfi3)
    }
      ,1000)
      
    } else if (counter == 4) {
      img.current.style.transform="scale(0.7)"
      img.current.style.transition="all 0.5s ease"
      setTimeout(()=>{
        img.current.style.transform="scale(1)"
        setviewimg(Certfi4)
      }
        ,1000)
      
    } else if (counter == 5) {
      img.current.style.transform="scale(.7)"
      img.current.style.transition="all 0.5s ease"
      setTimeout(()=>{
      img.current.style.transform="scale(1)"
      setviewimg(Certfi5)
    }
      ,1000)
      
    }
  }

useEffect(()=>{ 
  hanldingimg()

// eslint-disable-next-line react-hooks/exhaustive-deps
},[counter])
useEffect(()=>{ 
// console.log(img.current);
// console.log(viewimg);
// img.current.style.transform=" all 1s ease"

// eslint-disable-next-line react-hooks/exhaustive-deps
},[img,viewimg])
  const handlhimg=(e)=>{
     setcounter(parseInt(e.target.id))
    setviewimg(e.target.src)
  }
  return (
    <>

    <span><img src={Svg2} alt="Svg2" /></span>
    <span><img src={Svg1} alt="Svg1" /></span>

    <span><img src={Svg3} alt="Svg3" /></span>
    <span><img src={Svg1} alt="Svg1" /></span>
    <motion.div className="contentconterin4"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 150 }}>
      <div className="titlename4"><div className="contextname4"><h1>MY CERTIFICAT </h1><div className="fechicn4"><img src={Flechicone} alt="icone" /></div></div> </div>
      <div className="gettoTouch"><img src={Vector} alt="Vector" /> <h1><NavLink to="mailto:aymanbenchalh53@gmail.com">GET IN TOUCH</NavLink></h1></div>

      <ImgPrince3 />
    <div className="CertificatContainer">
      <div className="containerpositioncart">

   
      <div className="contantcarte">
          <div className="carte carte2" onClick={handlhimg} ><img id="1" className="1" src={Certfi1} alt="img" /></div>
          <div className="carte carte3" onClick={handlhimg} ><img id="2" className="2" src={Certfi2} alt="img" /></div>
          <div className="carte carte4" onClick={handlhimg} ><img id="3" className="3" src={Certfi3} alt="img" /></div>
          <div className="carte carte5" onClick={handlhimg} ><img id="4" className="4" src={Certfi4} alt="img" /></div>
          <div className="carte carte1" onClick={handlhimg} ><img id="5" className="5" src={Certfi5} alt="img" /></div>
      </div>  
      </div>
      <div className="contetnShowcarte">
          <div className="cartviw" ><img src={viewimg} alt="img" ref={img} /> </div>
          <div className="controlview" > 
          <div className="btn1" onClick={switchimgnext}>NEXT <img src={nextbtnicons} alt="icons" /></div> 
          <div className="btn2" onClick={switchimgprev}>
            <img src={prevbtnicons} alt="icons" />
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

export default Certificat