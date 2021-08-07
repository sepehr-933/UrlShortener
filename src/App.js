import React from 'react'
import Footer from "./genricCMs/Footer";
import Header from "./genricCMs/Header";
import Home from "./genricCMs/Home";
import './asset.css'
import {Route} from "react-router";
import Pricing from "./Pricing";
import Video from "./genricCMs/Video";
import {motion} from "framer-motion";

export default function App() {
const item = {
    hidden : {opacity : 0},
    show : {opacity: 1}
}

 return (
     <div>
         <Video />

           <motion.div
           variants={item}
           initial="hidden"
           animate="show"
           transition={{ duration: 0.9, delay : 2 }}

           >
             <header>
                 <Header/>
             </header>
             <section>
                 <Route exact path={'/'} component={Home}/>
                 <Route exact path={'/pricing'} component={Pricing}/>
             </section>
             <footer>
                 <Footer/>
             </footer>
         </motion.div>
             </div>
 )
}