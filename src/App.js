import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./menu/Menu";
import { useState } from "react";
import "./app.scss";

function App(){


    const [menuOpen, setMenuOpen] = useState(false);
    return (

        <div className="app">
            <Topbar/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">

        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>

            </div>
        </div>
    )
}

export default App;