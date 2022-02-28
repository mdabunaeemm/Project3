import "../css/footer.css"
import { NavLink } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
    <div className="footer-container">
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/skills">skills</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/chat">Let's Tolk</NavLink></li>
        </ul>
    </div>
</footer>
    )
}