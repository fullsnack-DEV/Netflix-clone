import React from "react";
import Img from "../../images/tab-1-pic.png";

import "./tabcomponent.style.css";
import { Button } from "../button/button";

function TabContentone() {
  return (
    <div className="TabContentContainer">
      <div className="container">
        <div className="tab-content">
          <div>
            <span style={{ marginBottom: "2rem" }}>
              If you decide Netflix isn't for you - No problem. No commitment.
              Cancel online anytime
            </span>

            <br />

            <Button style={{ marginTop: "2rem" }}>Try it Now</Button>
          </div>
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}
export default TabContentone;
