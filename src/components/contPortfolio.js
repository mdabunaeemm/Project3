import Portfolio from "./portfolio"
import '../css/portfolio.css'

export default function ContPortfolio(){
    return(
        <div className="portfolio" id="portfolio">
            <h1>my portfolio</h1>
            <div className="portfolio-container">
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
            </div>
        </div>
    )
}