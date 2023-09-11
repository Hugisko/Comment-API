import React from 'react'

const Comment = ({name,body,email}) => {
  return (
    <div className='comment__card'>
        <h2>{name}</h2>
        <p>{body}</p>
        <span>{email}</span>
    </div>
  )
}

export default Comment