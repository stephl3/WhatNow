import React from 'react';
import { NavLink } from 'react-router-dom';

const WhativitiesTabHeaders = ({ headerLabels, selectedTab, onTabHeaderClick, tabs }) => {
  const tabHeaders = tabs.map((tab, idx) => {

    return (
      <NavLink
        key={idx}
        exact to={`/home/${headerLabels[idx]}`}
        className={`whativities-tab-header-link`}
        activeStyle={{
          backgroundColor: "var(--hover-color)",
          color: "var(--font-color)"
          // border:"1px solid darkblue"
        }}
        onClick={() => onTabHeaderClick(idx)}>
        <div className="whativities-tab-header-label">
          {headerLabels[idx].charAt(0).toUpperCase() + headerLabels[idx].slice(1)}
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