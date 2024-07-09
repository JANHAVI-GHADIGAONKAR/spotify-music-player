// src/components/Player.js
import React from 'react';

const Player = ({ currentSong }) => {
  return (
    <div className="player">
      <img className='player-image' src={`https://cms.samespace.com/assets/${currentSong.cover}`} alt={currentSong.title} width={480} height={510}/>
      <h2>{currentSong.title}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Player;
