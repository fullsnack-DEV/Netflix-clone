import React from "react";
import Img from "../../images/tab-1-pic.png";
// import styled from "styled-components";
import "./tabcomponent.style.css";
function TabContentone() {
  return (
    <div>
      <div className="container">
        <div className="tab-content">
          <span>
            If you decide Netflix isn't for you - No problem. No commitment.
            Cancel online anytime
          </span>

          <br />

          <button>Try it Now</button>
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}
export default TabContentone;

//main content container

// const TabContentContainer = styled.div`
//   background: var(--main-deep-dark);
//   img {
//     width: 31.875rem;
//   }
//   .tab-content {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 2rem;
//     align-items: center;
//     font-size: 2rem;
//     padding: 2.5rem;
//   }
// `;
