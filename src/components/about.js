import { Link } from "react-router-dom"
import mypic from "../assetes/img/my-pic.png"
import '../css/about.css'

export default function About(){
    return(
        <>
        <div className="about">
        <div className="about-container">
            <img src={mypic} alt="Phot"/>
            <div className="about-information">
                <h1>About Us</h1>
                <h4>Simple! Our mission is to become the best design agency in the world! </h4>
                <p>What’s an outsourced marketing un-agency, you say? Well, we’re the antithesis to your run-of-the-mill agency that oversells and underdelivers.
                </p>
                <p>Lately, it’s been about closing the biggest contracts. But what about making the biggest impact for clients? Our goal is to get RESULTS that will make clients HAPPY without overpricing.
                </p>
                <p>Feeling skeptical? Work with us, and see the difference between getting marketing partners invested in your growth, versus salesmen invested in milking you dry!</p>
                <button><Link to="/chat">LET'S TALK</Link></button>
            </div>
        </div>
    </div>
    </>
    )
}