import React, { useRef, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../assets/styles/signup.css'
import { Link } from 'react-router-dom'

function Signup (props) {
  const [otp, setOtp] = useState(new Array(4).fill(''))
  const [digit, setDidit] = useState('')
  const [otpError, setOtpError] = useState(null)
  const optBoxReference = useRef([])

  function handleChange (value, index) {
    let newArray = [...otp]
    const digitValue = value.replace(/\D/g, '')
    newArray[index] = digitValue
    setOtp(newArray)

    if (value && index < 3 && digitValue != '') {
      optBoxReference.current[index + 1].focus()
    }
  }

  function handleBacksapceAndEnter (e, index) {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      optBoxReference.current[index - 1].focus()
    }
    if (e.key === 'Enter' && !e.target.value && index < 0) {
      optBoxReference.current[index + 1].focus()
    }
  }

  return (
    <Modal {...props} centered>
      <div class='signup-popup'>
        <div class='signup-header'>
          <div class='text-wrapper'>
            Signup
            <div id='signup-popup-close'>
              <i id='close' class='fa fa-close' onClick={props.onHide}></i>
            </div>
          </div>
        </div>
        <div class='signup-form'>
          <form id='form'>
            <div class='grp1'>
              <label id='lb'>Name</label>
              <input
                type='text'
                name='fullname'
                placeholder='Full name'
                required
              ></input>
            </div>
            <div class='grp2'>
              <label id='lb'>Email</label>
              <form action='#' class='grp2-child'>
                <input
                  id='input1'
                  type='email'
                  name='emailId'
                  placeholder='yourname@gmail.com'
                  required
                ></input>
                <button type='submit' id='verify_btn' variant='primary'>
                  Verify
                </button>
              </form>
            </div>
            <div class='grp3'>
              <label id='lb'>Enter OTP</label>
              <div class='otp-box'>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    value={digit}
                    maxLength={1}
                    onChange={e => handleChange(e.target.value, index)}
                    onKeyUp={e => handleBacksapceAndEnter(e, index)}
                    ref={reference =>
                      (optBoxReference.current[index] = reference)
                    }
                  ></input>
                ))}
              </div>
            </div>
            <div class='grp4'>
              <label id='lb'>Password</label>
              <input type='password' name='pass' disabled required></input>
            </div>
            <div class='grp5'>
              <label id='lb'>Confirm Password</label>
              <input
                type='password'
                name='confirm_pass'
                disabled
                required
              ></input>
            </div>
            <div class='signup-footer'>
              <Link id='link_to_dashboard' to='/dashboard'>
                <button type='submit' id='reg_btn'>
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default Signup
