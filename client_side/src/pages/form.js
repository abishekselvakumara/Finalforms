import React from 'react'
import '../style/style.css'
import Dash from './dashboard'
import Home from './home'
import Forms from '../forms/host student/HS-index'

function Form() {
  return (
    <div className='m-0 p-0' >
      <div className='p-3'>
        <Home />
      </div>
      <div className='d-flex '>
        <div className='pt-3'>
          <Dash />
        </div>
        <div className='p-3 w-100'>
          <Forms/>
        </div>
      </div>
    </div>
  )
}

export default Form;