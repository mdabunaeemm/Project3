import "../css/showroom.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";


export default function Showroom(){
    return(
        <div className="showroom">
        <div className="showroom-information">
            <h2>We work to</h2>
            <h1>Develop website</h1>
            <p>Hi, we are working to Develop MERN-Stack website so please visit our PortFolio</p>
            <div className="portfolio-video">
                <button className="portfolio-btn"><Link to="/portfolio">PortFolio</Link></button>
                <button className="video-btn"><i className="fa-solid fa-play"></i></button>
            </div>
        </div>
        <div className="showroom-img">
        </div>
    </div>
    )
}