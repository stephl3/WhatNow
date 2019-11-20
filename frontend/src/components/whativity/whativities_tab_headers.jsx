import React from 'react';
import { NavLink } from 'react-router-dom';

const WhativitiesTabHeaders = ({ headerLabels, selectedTab, onTabHeaderClick, tabs }) => {
  const tabHeaders = tabs.map((tab, idx) => {
    let selected = (idx === selectedTab ? 'active' : '');

    return (
      <NavLink
        key={idx}
        to={`/home/${headerLabels[idx]}`}
        className={`whativities-tab-header-link ${selected}`}
        onClick={() => onTabHeaderClick(idx)}>
        <div className="whativities-tab-header-label">
          {headerLabels[idx]}
        </div>
      </NavLink>
    )
  });

  return (
    <div className="whativities-tab-headers-container">
      <div className="whativities-tab-headers">
        {tabHeaders}
      </div>
    </div>
  )
}

export default WhativitiesTabHeaders;