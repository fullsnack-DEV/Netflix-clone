import React from "react";
import { Button } from "../button/button";
import "./tabcontentthree.style.css";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";

function TabContentthre() {
  return (
    <div className="TabContainer">
      <div className="tab-content--3">
        <div className="tab-top-content--3">
          <span style={{ fontSize: "1.5rem" }}>
            Choose one plan and watch evrything on Netfkix
          </span>
          <Button className="btn-1"> Try it now </Button>
        </div>
        {/* tab bottom content */}
        <div className="tab-bottom-content--3">
          <table>
            <thead>
              <tr>
                <th></th>

                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Monthly Price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>

              <tr>
                <td>ULTRAHD available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Screens you can watch on same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your Tv , phone and tablets</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and Tv shows</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TabContentthre;
