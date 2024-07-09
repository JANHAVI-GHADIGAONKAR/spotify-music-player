// src/components/SongList.js
import React from 'react';

const SongList = ({ songs, setCurrentSong }) => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <div key={song.id} onClick={() => setCurrentSong(song)}>
            <div className="songs d-flex justify-content-start">
                <div className="song-image">
                <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.name} width={50} height={50} />
                </div>
            
                <div className="artist-name">
                    <p className=''>{song.name}</p>
                    <p>{song.artist}</p>
                </div>
            </div>
            
        </div>
        
      ))}
    </div>
  );
};

export default SongList;
