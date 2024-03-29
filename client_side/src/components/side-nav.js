import React from 'react'
import '../styles/side-nav.css'
import { Link } from 'react-router-dom'

function side_nav_control () {
  var control = document.getElementById('controller')
  if (control.classList[1] === 'fa-angle-left') {
    document.getElementsByClassName('side-nav-modal')[0].style.width = '30px'
    control.classList.remove('fa-angle-left')
    control.classList.add('fa-angle-right')
  } else {
    if (window.screen.width <= 850) {
      document.getElementsByClassName('side-nav-modal')[0].style.width = '100%'
    } else {
      document.getElementsByClassName('side-nav-modal')[0].style.width = '400px'
    }
    control = document.getElementById('controller')
    control.classList.remove('fa-angle-right')
    control.classList.add('fa-angle-left')
  }
}

function SideNav () {
  return (
    <>
      <div
        class='side-nav-modal'
        onClick={() => {
          side_nav_control()
        }}
      >
        <div class='nav-content'>
          <div class='nav-header'>
            <div class='profile'></div>
            <div class='username text-wrapper'>Jhon Smith</div>
          </div>
          <div class='navs'>
            <Link id='link_to_dashboard' to='/dashboard'>
              Dashboard
            </Link>
            <Link id='link_to_profile' to='/profile'>
              Profile
            </Link>
            <a href='#'>Schedule Visit</a>
            <a href='#'>Equipment Reservation</a>
            <a href='#'>Word Order</a>
            <a href='#'>Seed Fund Application</a>
          </div>
          <div class='nav-footer'>
            <Link id='link_to_home' to='/'>
              <button id='logout-btn'>Logout</button>
            </Link>
          </div>
        </div>
        <div class='side-nav-control'>
          {window.screen.width < 1260 && (
            <>
              <i id='controller' class='fa fa-angle-right'></i>
            </>
          )}
          {window.screen.width >= 1260 && (
            <>
              <i id='controller' class='fa fa-angle-left'></i>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SideNav
