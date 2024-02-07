import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Make sure to create this CSS file in the src directory

function App() {
  const [state, setState] = useState('initial');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleYes = () => {
    setState('yes');
  };

  const handleNo = () => {
    setState('no');
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [isPlaying]);
  

  return (
    <div className="App">
      <header className="App-header">
        {state === 'initial' && (
          <div>
            <h2>Will you be my Valentine?</h2>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
          </div>
        )}
        {state === 'yes' && (
          <div className="media-container">
            <img src="happy.jpg" alt="Love" />
            <video controls>
              <source src="23715.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {state === 'no' && (
          <div>
            <img src="sad.jpg" alt="Sad" />
            <audio ref={audioRef} src="adiga.mp3" loop /> {/* Loop attribute added here */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
