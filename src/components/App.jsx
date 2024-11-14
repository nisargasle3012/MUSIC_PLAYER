//App.jsx
import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import CardWrapper from './CardWrapper';
import songs from '../songs';

function App() {
  const [currentSong, setCurrentSong] = useState({
    title: songs[0].title,
    artist: songs[0].artist,
  });
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const updateCurrentSong = (title, artist) => {
    setCurrentSong({ title, artist });
  };

  return (
    <div className="container">
      <div className="left">
        {songs.map((song, index) => (
          <CardWrapper
            key={index}
            contact={{ name: song.title, artist: song.artist }}
            updateCurrentSong={updateCurrentSong}
            setCurrentSongIndex={setCurrentSongIndex}
            songIndex={index}
          />
        ))}
      </div>

      <div className="right">
        <MusicPlayer
          updateCurrentSong={updateCurrentSong}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
        />
        <div className="player-name">Geet Music Player</div>
        <div className="song_name">
          <h1>{currentSong.title}</h1>
          <p>{currentSong.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
