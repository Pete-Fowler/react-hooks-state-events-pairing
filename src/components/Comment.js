import React from 'react';

function Comment({ user, comment }) {

  return (
    <>
      <h3>{user}</h3>
      <p>{comment}</p>
    </>
  )
}

export default Comment;