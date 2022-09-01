import React, { useState } from 'react';
import video from '../data/video';

function Details ({ video, hideComments, areCommentsShown }) {
  const [ upVotes, setUpvotes ] = useState(video.upvotes);
  const [ downVotes, setDownVotes ] = useState(video.downvotes);
  const [ disabled, setDisabled ] = useState(false);

  function handleVote(emoji) {
    if(emoji === '👎' && downVotes !== video.downvotes - 1) {
      setDownVotes(downVotes => downVotes  - 1);
      setDisabled(true);
    }
    if(emoji === '👍' && upVotes !== video.upvotes + 1) {
      setUpvotes(upVotes => upVotes + 1);
      setDisabled(true);
    }
  }

  const commentBtnText = areCommentsShown ? 'Hide Comments' : 'Show Comments';
  return (
    <>
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button className='like'
        disabled={disabled}
        onClick={() => handleVote('👍')}>{upVotes} 👍
      </button>
      <button className='like' 
        disabled={disabled}
        onClick={() => handleVote('👎')}>{downVotes} 👎
      </button>
      <br></br>
      <button className='comments' onClick={hideComments}>{commentBtnText}</button>
    </>
  )
}

export default Details;
