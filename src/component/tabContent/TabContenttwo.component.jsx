import React from "react";
import { Button } from "../button/button";
import "../tabContent/tabContenttwo.style.css";
import ImgTv from "../../images/tab-tv.png";
import ImgTab from "../../images/tab-tablet.png";
import ImgDesk from "../../images/tab-macbook.png";
function TabContenttwo() {
  return (
    <div className="TabContainer">
      <div className="tab-content--2">
        <div className="tab-top-content--2">
          <span>
            {" "}
            Watch Tv Shows and Movies anytime , anywhere- personalized for you{" "}
          </span>
          <Button className="btn">Try it now</Button>
        </div>
        {/*tab-bottom content */}
        <div className="tab-bottom-content">
          {/* Tv image container */}
          <div>
            <img src={ImgTv} alt="" style={{ width: "18.75rem" }} />
            <h3>Watch on your Tv</h3>
            <p>
              Smart TVs , Playstations,XBOX,Chromecast,AppleTV,Blue-ray players
              and more
            </p>
          </div>
          {/* Tablet image container */}
          <div>
            <img
              src={ImgTab}
              style={{ width: "18.75rem", paddingTop: "0.625rem" }}
              alt="tvphoto"
            />
            <h3>Watch on your Tv</h3>
            <p>
              Smart TVs , Playstations,XBOX,Chromecast,AppleTV,Blue-ray players
              and more
            </p>
          </div>
          {/* Desktop image container */}
          <div>
            <img
              src={ImgDesk}
              style={{
                width: "18.75rem",
                paddingTop: "0.625rem",
                paddingBottom: "0.625rem"
              }}
              alt="tvphoto"
            />
            <h3>Watch on your Tv</h3>
            <p>
              Smart TVs , Playstations,XBOX,Chromecast,AppleTV,Blue-ray players
              and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContenttwo;
