import Link from 'next/link'
import React from 'react'
import Button from '../../components/button/Button'

function About({props} ) {


  return (
    <div className=''>


      <h1  className='text-5xl text-sky-600'>Welcome About Page</h1>
    


    <Link href='/'>
      <Button but_name="Home"></Button>
    </Link>
    
  
    
    </div>

   

  )
}

export default About