import React from "react";
import './Home.css';


function Home(){
    return (
    <div>
        <div className="starwars-demo">
            <img src="https://cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" /> 
            {/* <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" /> */}
            <h2 className="byline" id="byline">Intergalatic Battle</h2>
            <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
        </div>
    </div>
    );
}



export default Home;