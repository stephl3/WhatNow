import React from "react";

import WhativityIndexContainer from './whativity_index_container';
import WhativitiesTabHeaders from "./whativities_tab_headers";

class WhativitiesTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1
    };

    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount(){
  
  }

  selectTab(idx) {
    
    this.setState({ selectedTab: idx });
  }

  render() {
    const headerLabels = [
      'Popular',
      'Whatever',
      'Social'
    ];
    const whativityIndexTabs = [
      this.props.popular,
      this.props.spontaneous,
      this.props.friends
    ];
    const whativityIndexTabItems = whativityIndexTabs[this.state.selectedTab];
    return (
      <div className="whativities-tab-container">
        <div className="whativities-tab-headers-wrapper">
          <WhativitiesTabHeaders
            headerLabels={headerLabels}
            selectedTab={this.state.selectedTab}
            onTabHeaderClick={this.selectTab}
            tabs={whativityIndexTabs}
          />
        </div>
        <div className="whativities-tab">
          <WhativityIndexContainer selectedTab={headerLabels[this.state.selectedTab]} whatItems={whativityIndexTabItems} />
        </div>
      </div>
    )
  }
}

export default WhativitiesTab;