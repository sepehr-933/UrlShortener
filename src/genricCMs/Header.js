import React,{useState,useRef,useEffect} from 'react'
import '../../public/logo.svg'
import '../asset.css'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const ref = useRef()
    const Ref = useRef()
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open : {opacity: "1", x: "0"},
        closed : {opacity: "0", x: "100%" }
    }

    console.log(isOpen);


    useEffect(() => {
        document.body.addEventListener("click" , (event) => {
            if (ref.current.contains(event.target)) {
                return ;
            }
            if (Ref.current.contains(event.target)) {
                return ;
            }
            setIsOpen(false)
        })
    })


    return (
            <div>
                <div className="head" id="topNav">

                    <motion.span
                        animate={{ y : 100 }}
                        transition={{  delay:"2.5", type : "spring",bounce : 0.6 , stiffness:"120", duration : 0.9 }}
                        style={{padding: "10px"}}
                        className="header__icon"><img src="logo.svg"/>
                    </motion.span>

                    <span
                        ref={Ref}
                        style={{position : "fixed", top: "2rem", right:"1rem",

                            alignItems:"center"
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isOpen ?
                                <FontAwesomeIcon style={{fontSize: "40px"}} icon={faTimes}/>
                            :

                            <FontAwesomeIcon style={{fontSize: "40px"}} icon={faBars}/>
                        }
                    </span>

                    <motion.span
                        ref={ref}
                     animate={isOpen ? "open" : "closed"}
                     variants={variants}
                     transition={{duration:0.5, type:"spring"}}
                        className="middleSpan"
                    >
                        <Link
                            onClick={() => setIsOpen(false)}
                            style={{textDecoration:"none", color:"grey", fontSize:"1.5rem"}}
                            to='/'>
                            Home
                        </Link>

                        <Link
                            style={{textDecoration:"none", color:"grey", fontSize:"1.5rem"}}
                            to='#'>
                            Resource
                        </Link>

                        <Link
                            onClick={() => setIsOpen(false)}
                            style={{textDecoration:"none", color:"grey", fontSize:"1.5rem"}}
                            to='/pricing'>
                            Pricing
                        </Link>



                         <button  className="blueButton">Sign Up</button>
                    </motion.span>

                </div>
            </div>
        )
    }