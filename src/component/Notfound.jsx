import Svg1 from "../svg-elenmt/Svg1.svg"
import Svg2 from "../svg-elenmt/Svg2.svg"
import Svg3 from "../svg-elenmt/Svg3.svg"
import Notfundimg from "../svg-elenmt/404erreu.svg"
import "./Notfund_sytly.css"
import { NavLink } from "react-router-dom"
function Notfound() {
  return (
   
    <>
    <span><img src={Svg2} alt="Svg2" /></span>
    <span><img src={Svg1} alt="Svg1" /></span>

    <span><img src={Svg3} alt="Svg3" /></span>
    <span><img src={Svg1} alt="Svg1" /></span>
    <div className="contentconterin5">
      <div className="contentimgprine5">
        <div className="principal"><img src={Notfundimg} alt="img" /></div>
        <div className="btncontant"><NavLink to="/"></NavLink></div>        
    </div>
    </div>
    </>
  )
}

export default Notfound
