import React from 'react'
import '../asset.css'
import '../../public/logo.svg'
import '../../public/illustration-working.svg'
import '../../public/icon-brand-recognition.svg'
import '../../public/icon-detailed-records.svg'
import '../../public/icon-fully-customizable.svg'
import '../../public/bg-shorten-desktop.svg'
import '../asset.css'

 export default function Home() {
    
    return (

        <div>
            <div className="content">
                <div className="div1">
                    <h1>{"More Than Just Shorter Links".split(" ").map((word,i) =>
                        <span
                        style={{marginLeft: "15px", display : "inline-block"}}
                        >
                        {word}
                    </span>)}</h1>
                    <p>Build Your Brand's Recognition and get detailed<br/> insights
                        on how your links are performing</p>
                    <button className="blueButton">Get started</button>
                </div>

                <div>
                    <img alt="illustration" src="illustration-working.svg"/>
                </div>
                <div className="inputDiv">
                    <input placeholder="Shorten a link here" type="text"/> <button>Shorten it</button>
                </div>
            </div>


            <div className="content2">
                <div className="little">
                    <h1>Advanced Statistics</h1>
                    <p>Track how your links are performing across the web with <br/>
                        with our advanced statistics dashboard</p>
                </div>

                <div className="tripleDivs">
                    <div className="margin3">
                        <span className="rounder"> <img alt="brand" className="Icons" src="icon-brand-recognition.svg"/></span>
                        <h2>Brand recognition</h2>
                        <p>Boost your plan recognition with<br/> each click.
                            generic links don't<br/> mean a thing .Branded links help<br/>
                            instill confidence in your content</p>
                    </div>
                    <div className="margin">
                        <span className="rounder"> <img alt="details" className="Icons" src="icon-detailed-records.svg"/></span>
                        <h2>Brand recognition</h2>
                        <p>Boost your plan recognition with<br/> each click.
                            generic links don't<br/> mean a thing .Branded links help<br/>
                            instill confidence in your content</p>
                    </div>
                    <div className="margin2">
                        <span className="rounder" > <img alt="customizable" className="Icons" src="icon-fully-customizable.svg"/></span>
                        <h2>Brand recognition</h2>
                        <p>Boost your plan recognition with<br/> each click.
                            generic links don't<br/> mean a thing .Branded links help<br/>
                            instill confidence in your content</p>
                    </div>

                </div>
            </div>
        </div>
    )
 }