import "../css/portfolio.css"
import img from "../assetes/img/showroom.jpg";


export default function Portfolio(){
    return(
        <div className="single-portpolio">
            <img src={img} alt=""/>
            <div className="single-info">
                <h3>Online Shoping</h3>
                <div className="creator-catagory">
                    <span>Type : 
                        <strong>Shop</strong>
                    </span>
                    <span>Owner : 
                        <strong>Naeem</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}