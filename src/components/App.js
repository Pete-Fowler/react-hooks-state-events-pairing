import React, { useState } from 'react';
import video from "../data/video.js";
import Comments from './Comments';
import Details from './Details';

function App() {
  const [ areCommentsShown, setAreCommentsShown ] = useState(true);

function hideComments() {
  setAreCommentsShown(commentsShown => !commentsShown);
}

  return (
    <div className="App">
      <div id="video-box">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
        <Details video={video} hideComments={hideComments} areCommentsShown={areCommentsShown}/>
      </div>
      {areCommentsShown ? <Comments comments={video.comments}/> : ''}
    </div>
  );
}

export default App;
