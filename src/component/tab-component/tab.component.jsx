import React, { Component } from "react";
import { Tab, Tabs, Tablist, TabPanel, TabList } from "react-tabs";
import Tabdoor from "../tabs_nav/tabdoor.component";
import Tabdevices from "../tabs_nav/tabdevices.component";
import Tabprice from "../tabs_nav/tabprice.component";
import TabCotentone from "../tabContent/TabContentone.component";
import TabComponenttwo from "../tabContent/TabContenttwo.component";
import TabComponentthre from "../tabContent/tabContentthree.component";
import "../../css/tab-nav.css";

class tab extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container ">
            <Tab
              className={`${
                this.state.tabIndex === 0 ? "tab-selected active" : null
              }`}
            >
              <Tabdoor />
              <p style={{ marginBottom: "1.875rem" }}>
                <strong>
                  No Commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 1 ? "tab-selected  active" : null
              }`}
            >
              <Tabdevices />
              <p style={{ marginTop: "-5.3125rem" }}>
                <strong> Watch anywhere </strong>
              </p>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? "tab-selected  active" : null
              }`}
            >
              <Tabprice />
              <p>
                <strong> Pick your price </strong>
              </p>
            </Tab>
          </TabList>

          <TabPanel>
            <TabCotentone />
          </TabPanel>
          <TabPanel>
            <TabComponenttwo />
          </TabPanel>
          <TabPanel>
            <TabComponentthre />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default tab;
