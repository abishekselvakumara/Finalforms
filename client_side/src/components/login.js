import Modal from 'react-bootstrap/Modal'
import React from 'react'
import Signup from '../components/signup';
import Button from 'react-bootstrap/Button'
import '../styles/login.css'
import { Link } from 'react-router-dom';

function Login(props) {

  const [state, active] = React.useState(false);
  return (
    <>
      <Modal
        {...props}
        centered
      >
        <div class="login-popup">
          <div class="login-header">
            <div class="text-wrapper">Login
              <div id="login-popup-close"><i id="close" class="fa fa-close" onClick={props.onHide}></i></div>
            </div>
          </div>
          <div class="login-form">
            <form>
              <div class="grp1">
                <label id="lb1">Email</label>
                <input id="input1" type='email' name="emailId" placeholder='yourname@gmail.com' required></input>
              </div>
              <div class="grp2">
                <label id="lb2">Password</label>
                <input id="input2" type="password" name="pass" required></input>
              </div>
              <div class="grp3">
                <a href='#'>Forget Password</a>
              </div>
              <div class="grp4">
                <button id="submit_btn" type='submit'><Link id="link_to_dashboard" to="/dashboard">Sign up</Link></button>
              </div>
            </form>
            <div class="login-footer">
              <div class="text-wrapper">Don't have an account?<Button id="signup_text" variant='primary' onClick={() => { active(true); props.setModalShow(false) }}>signup for free!</Button></div>
            </div>
          </div>
        </div>
      </Modal>
      <div class="signup-content">
        <Signup
          show={state}
          onHide={() => active(false)}
        />
      </div>
    </>
  );
}

export default Login