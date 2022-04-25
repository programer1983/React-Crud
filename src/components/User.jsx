import React from 'react'
import "./User.css"

const User = ({id, name, email}) => {
  return (
    <div className='list'>
        <span>{name}</span>
        <span>{email}</span>
        <span>
          <button>Edit</button>
          <button>Delete</button>
        </span>
    </div>
  )
}

export default User