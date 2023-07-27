import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div>
      <h1>Your Parems is hear 
        <span className='text-2xl text-black bg-orange-500 p-2'>
        {params.id}
        </span>
        </h1>
    </div>
  )
}

export default UserProfile