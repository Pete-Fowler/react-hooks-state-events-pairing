import React, { useState } from 'react';
import Comment from './Comment';

function Comments ({ comments }) {
  
  const total = comments.length;
  const commentsList = comments.map(comment => 
    <Comment key={comment.id} 
      user={comment.user} 
      comment={comment.comment}
    />)

  return (
    <>
    <h2>{total} Comments</h2>
    {commentsList}
    </>
  )
}

export default Comments;
