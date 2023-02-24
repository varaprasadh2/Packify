import React from "react";
import Mylogo from '../assets/app_logo.png';
import Google from '../assets/google.png';
import './LandingPage.css';

const landingPage = () => {
  return (
      <div className="landing_page">
        <div>
        <img className="logo" src={Mylogo} />
        </div>
        <div className="headings">
            <p className="heading">
            Maximize Space. Minimize Risk. <br/>
              Revolutionize Your Load Planning.</p>
            <div className="sub-heading">
                Efficiently pack your items into any container size or shape with <span className="sub-company">Packify</span>, the ultimate load planning solution. Our platform uses advanced algorithms to revolutionize your load planning process, allowing you to maximize space while minimizing the risk of damage during transport. Say goodbye to inefficient load planning and hello to streamlined logistics with <span className="sub-company">Packify</span>.
            </div>
        </div>
        <div className="button btn"><img width={15} src={Google}/> Continue with google</div>
      </div>
  )
}

export default landingPage;