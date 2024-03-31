import React from 'react'
import Logo from './assets/cat-logo.png'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <section className='section'>
        <div className="container mx-auto">
            <div className="flex flex-col mx-auto glassmorphism lg:w-[60vh]">
                <img src={Logo} alt="" width={[100]} height={[100]} className='mx-auto'/>
                <span className='text-xl mx-auto font-bold text-gradient'>LAST TRAIN</span>
                <br />
                <Link to="/login" className='btn text-sm text-center'>Log In</Link>
                <br />
                <Link to="/signup" className='btn text-sm text-center'>Sign Up</Link>
            </div>
        </div>
    </section>
  )
}

export default Start