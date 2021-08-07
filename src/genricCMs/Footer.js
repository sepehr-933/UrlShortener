import React from 'react'
import '../../public/icon-facebook.svg'
import '../../public/icon-instagram.svg'
import '../../public/icon-pinterest.svg'
import '../../public/icon-twitter.svg'
import '../asset.css'
import {motion} from 'framer-motion'

export default function Footer() {
    const variants = {
        initial : { opacity : 0.2},
        animate : {opacity: 1}
    }

    return (
        <div>
            <div className="footer">
                <div style={{backgroundImage:'url("bg-shorten-desktop.svg")', backgroundColor: ' hsl(257, 27%, 26%)'
                    ,padding:"3%"}}>
                 <span>Boost your links today<br/>
                 <button className="blueButton">Get started</button> </span>
                </div>
                <div className="lastDiv">
                    <motion.p
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    transition={{delay : 2.5 , duration: 1 , repeat : Infinity, repeatType: 'reverse'}}
                    >
                        Shortly
                    </motion.p>
                    <div>
                        <h3>
                            Features
                        </h3>
                        <p>
                            Link shortening
                        </p>
                        <p>
                            Branded links
                        </p>
                        <p>
                            Analytics
                        </p>
                    </div>
                    <div>
                        <h3>
                            Resources
                        </h3>
                        <p>
                            Blog
                        </p>
                        <p>
                            Developers
                        </p>
                        <p>
                            Support
                        </p>
                    </div>
                    <div>
                        <h3>
                            Company
                        </h3>
                        <p>
                            About
                        </p>
                        <p>
                            Our team
                        </p>
                        <p>
                            Career
                        </p>
                        <p>
                            Contact
                        </p>
                    </div>
                    <div>
                        <img src="icon-facebook.svg"/>
                        <img src="icon-instagram.svg"/>
                        <img src="icon-pinterest.svg"/>
                        <img src="icon-twitter.svg"/>
                    </div>
                </div>

            </div>
        </div>
    )
}