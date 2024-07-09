// // src/components/Controls.js
// import React from 'react';

// const Controls = ({ audioRef, isPlaying, setIsPlaying }) => {
//   const playPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(error => {
//         console.log("Playback prevented", error);
//       });
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="controls">
//       <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//     </div>
//   );
// };

// export default Controls;


import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaEllipsisH } from 'react-icons/fa';


const Controls = ({ isPlaying, onPlayPause, onNext, onPrevious, onVolumeChange }) => {
  return (
    <div className="player-controls">
      <div className="progress-bar">
        <input type="range" className="progress" />
      </div>
      <div className="controls">
        <FaEllipsisH className="icon" />
        <FaBackward className="icon" onClick={onPrevious} />
        {isPlaying ? (
          <FaPause className="icon play-pause" onClick={onPlayPause} />
        ) : (
          <FaPlay className="icon play-pause" onClick={onPlayPause} />
        )}
        <FaForward className="icon" onClick={onNext} />
        <FaVolumeUp className="icon" onClick={onVolumeChange} />
      </div>
    </div>
  );
};

export default Controls;
