import React from 'react'
import {motion} from "framer-motion";
import video from './out.mp4'

const Video = () => {
    return (
        <motion.div
        animate={{y : -1000}}
        transition={{ duration : 0.5, delay : 1.9 }}
        >
            <video style={{ zIndex: "10" , width: "100%" , height:"100vh", position: "fixed"}} autoPlay id="video" muted>
                <source src={video} type="video/mp4"/>
            </video>
        </motion.div>
    )
}

export default Video