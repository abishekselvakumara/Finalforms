import React from 'react'
import '../style/style.css'
import Dash from './dashboard'
import Home from './home'

function Form() {
  return (
    <div className='from' >
      <div className='p-3'>
        <Home />
      </div>
      <div className='d-flex'>
        <div className='p-3'>
          <Dash />
        </div>
        <div className='p-3'>
          <h>Form ergjberjg rhjbgrem jrhber gijerbg rkjgbjrwmg wbj </h>
        </div>
      </div>
    </div>
  )
}

export default Form;