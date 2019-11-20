import React from "react";

import WhativitiesTabHeaders from "./whativities_tab_headers";
import PopularWhativities from './whativity_tabs/popular_whativities';
import SpontaneousWhativities from './whativity_tabs/spontaneous_whativities';
import FriendsWhativities from './whativity_tabs/friends_whativities';

class WhativitiesTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(idx) {
    this.setState({ selectedTab: idx });
  }

  render() {
    const headerLabels = [
      'Popular',
      'Spontaneous',
      'Friends'
    ];
    const whativitiesTabs = [
      <PopularWhativities />,
      <SpontaneousWhativities />,
      <FriendsWhativities />
    ];
    const selectedTab = whativitiesTabs[this.state.selectedTab];

    return (
      <div className="whativities-tab-container">
        <div className="whativities-tab-headers-wrapper">
          <WhativitiesTabHeaders
            headerLabels={headerLabels}
            selectedTab={this.state.selectedTab}
            onTabHeaderClick={this.selectTab}
            tabs={whativitiesTabs}
          />
        </div>
        <div className="whativities-tab">
          {selectedTab}
        </div>
      </div>
    )
  }
}

export default WhativitiesTab;