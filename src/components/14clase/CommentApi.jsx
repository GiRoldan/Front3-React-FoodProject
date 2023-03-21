import React, { useEffect, useState } from 'react'

const CommentApi = () => {
    const [comment, setComment] = useState([]);
    const urlApi = 'https://jsonplaceholder.typicode.com/comments';

    useEffect(() =>{
        fetch(urlApi)
            .then(resp => resp.json())
            .then(data => setComment(data))
    }, [])

    console.log(comment);

  return (
    <div>
      <h1>Comentarios</h1>
      <br />
      {comment.map(c => (
        <div key={c.id}>
          <h3>{c.name}</h3>
          <p>{c.body}</p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default CommentApi
