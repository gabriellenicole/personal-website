import React from 'react'
import './Home.scss'

export default function Home() {
  return (
    <div className='home' id='home'>
      {/* <div className='home__cursor'></div> */}
      <div className='shapes'>
        <div className='shape shape-1'></div>
        <div className='shape shape-2'></div>
        <div className='shape shape-3'></div>
      </div>
      <div className='text'>
        <div className='name'>
          <h1>Gabrielle</h1>
        </div>
        <div className='description'>
          <h2>
            sophomore student | learner | <span>tech</span> enthusiast |{' '}
            <span>designer</span>
          </h2>
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  )
}
