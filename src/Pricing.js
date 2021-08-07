import React,{useState, useRef} from 'react'
import { useSpring, animated } from "react-spring";
import { useControls } from  "leva";
import './Price.css'

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 25,
    (x - rect.left - rect.width / 2) / 25,
    1.05
];

const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Pricing() {

    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const config = useControls({
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: true,
        precision: 0.01,
        velocity: 0,
        easing: (t) => t
    });

    const props = useSpring({ xys, config });

    return (
        <div ref={ref}>
        <div className='pricingGrid'>
           <div className="sideDivs">
            <h3>Basic</h3>
            <h1>$19.99</h1>
               <h3 style={{ borderTop:"1px solid #d9d9d9",borderBottom:"1px solid #d9d9d9",
                   paddingTop:"20px"}}>500GB storage</h3>
               <h3 style={{borderBottom:"1px solid #d9d9d9"}}>2 Users allowed</h3>
               <h3 style={{borderBottom:"1px solid #d9d9d9 "}}>Send up to 3GB</h3>
               <button className="lmButton">Learn more</button>
           </div>

            <animated.div className="mainDiv"
                 style={{ transform: props.xys.to(trans) }}
                 onMouseLeave={() => set([0, 0, 1])}
                 onMouseMove={(e) => {
                     const rect = ref.current.getBoundingClientRect();
                     set(calc(e.clientX, e.clientY, rect));
                 }}
            >

              <p>Professional</p>
              <h2>$ 29.99</h2>
                <p style={{borderTop:"1px solid #d9d9d9",borderBottom:"1px solid #d9d9d9",
                paddingTop:"20px"}}>1TB storage</p>
                <p style={{borderBottom:"1px solid #d9d9d9"}}>5 Users allowed</p>
                <p style={{borderBottom:"1px solid #d9d9d9 "}}>Send up to 10GB</p>
                <button>Learn more</button>

            </animated.div>

            <div className="sideDivs">
              <h3>Master</h3>
                <h1>39.99</h1>
                <h3 style={{ borderTop:"1px solid #d9d9d9",borderBottom:"1px solid #d9d9d9",
                    paddingTop:"20px"}}>2TB storage</h3>
                <h3 style={{borderBottom:"1px solid #d9d9d9"}}>10Users allowed</h3>
                <h3 style={{borderBottom:"1px solid #d9d9d9 "}}>Send up to 10GB</h3>
                <button className="lmButton">Learn more</button>
            </div>
        </div>
        </div>
    )
}