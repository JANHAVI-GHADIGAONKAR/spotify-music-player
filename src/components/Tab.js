// src/components/Tab.js
import React from 'react';

const Tab = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="tabs">
      <button onClick={() => setCurrentTab('For You')}>For You</button>
      <button onClick={() => setCurrentTab('Top Tracks')}>Top Tracks</button>
    </div>
  );
};

export default Tab;
