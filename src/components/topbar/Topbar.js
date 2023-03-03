import "./Topbar.scss"
import 'material-icons/iconfont/material-icons.css';
import { useState } from "react";

function Topbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="topbar">

      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Genius</a>
          <div className="itemContainer">
            <span className="material-icons icon ">person_2</span>
            <span> +91 9463617001 </span>
          </div>
          <div className="itemContainer">
            <span className="material-icons icon">email</span>
            <span> samr@gmail.com </span>
          </div>
        </div>

        <div className="right">

          <div className="hamburger" onClick={()=>(setMenuOpen(!menuOpen))}>
            <span className="material-icons icon" >menu</span>
            
            </div>

        </div>

      </div>
    </div>
  )
}

export default Topbar