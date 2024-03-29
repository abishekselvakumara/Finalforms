import '../styles/profile.css'
import TOPNAV from '../components/top-navigation.js'
import SIDENAV from '../components/side-nav.js'
import { useState } from 'react'

function EditProfileInformation () {
  return (
    <>
      <div class='title-header'>
        <div class='text-wrapper'>Basic Information</div>
      </div>
      <div class='flex-1'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <label class='term text-wrapper'>Name</label>
            <input
              type='text'
              id='fullname'
              name='fullname'
              value={'Jhon Smith'}
            ></input>
          </div>
          <div class='groups grp2'>
            <label class='term text-wrapper'>Email</label>
            <input
              type='email'
              id='email'
              name='emailId'
              value={'jhonsmith14@gmail.com'}
            ></input>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp3'>
            <label class='term-edit term text-wrapper'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={'jhon@14'}
            ></input>
          </div>
        </div>
      </div>
      <div class='title-header'>
        <div class='text-wrapper'>Student Information</div>
      </div>
      <div class='flex-2 info-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <label class='term text-wrapper'>Register Number</label>
            <input
              type='number'
              id='regno'
              name='regno'
              value={'73772126114'}
            ></input>
          </div>
          <div class='groups grp2'>
            <label class='term text-wrapper'>Semester</label>
            <input type='number' id='sem' name='sem' value={'6'}></input>
          </div>
          <div class='groups grp3'>
            <label class='term text-wrapper'>Degree</label>
            <input
              type='text'
              id='degree'
              name='degree'
              value={'B.Tech'}
            ></input>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <label class='term text-wrapper'>Year</label>
            <input type='number' id='year' name='year' value={'3'}></input>
          </div>
          <div class='groups grp5'>
            <label class='term text-wrapper'>Course</label>
            <input
              type='text'
              id='course'
              name='course'
              value={'Artificial Intelligence and Data Science'}
            ></input>
          </div>
          <div class='groups grp4'>
            <label class='term text-wrapper'>Year of graduation</label>
            <input
              type='number'
              id='yearOfGraduation'
              name='yearOfGraduation'
              value={'2025'}
            ></input>
          </div>
        </div>
      </div>
    </>
  )
}

function DisplayProfileInformation () {
  return (
    <>
      <div class='title-header'>
        <div class='text-wrapper'>Basic Information</div>
      </div>
      <div class='flex-1' id='display-flex-1'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Name</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>Jhon Smith</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Email</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>jhonsmith14@gmail.com</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp3'>
            <div class='term text-wrapper'>Username</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>jhonsmith14</div>
          </div>
        </div>
      </div>
      <div class='title-header'>
        <div class='text-wrapper'>Student Information</div>
      </div>
      <div class='flex-2' id='display-flex-2'>
        <div class='flex-col-1'>
          <div class='groups grp1'>
            <div class='term text-wrapper'>Register Number</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>73772126114</div>
          </div>
          <div class='groups grp2'>
            <div class='term text-wrapper'>Semester</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>6</div>
          </div>
          <div class='groups grp3'>
            <div class='term text-wrapper'>Degree</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>B.Tech</div>
          </div>
        </div>
        <div class='flex-col-2'>
          <div class='groups grp4'>
            <div class='term text-wrapper'>Course</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>
              Artificial Intelligence and Data Science
            </div>
          </div>
          <div class='groups grp5'>
            <div class='term text-wrapper'>Year of graduation</div>
            <div class='colon text-wrapper'>:</div>
            <div class='description text-wrapper'>2025</div>
          </div>
        </div>
      </div>
    </>
  )
}

function UserProfile () {
  const [edit, setEdit] = useState(0)
  return (
    <>
      <TOPNAV />
      <div class='up-modal'>
        <SIDENAV />
        <div class='up-content'>
          <div class='top-content'>
            <div class='profile'>
              <div class='wrapper-1'>
                <div class='outer-cirlce progress-line'>
                  <div class='inner circle profile-img'></div>
                </div>
                <svg
                  xmlns='http://www.w3.org./2000/svg'
                  version='1.1'
                  width={'230'}
                  height={'230'}
                >
                  <circle
                    cx={'110'}
                    cy={'120'}
                    r={'105'}
                    strokeLinecap='round'
                  ></circle>
                </svg>
                <div class='progress-circle'>
                  <div class='text-wrapper progress-num'>20%</div>
                </div>
              </div>
              <div class='wrapper-2 user-id'>
                <div class='username text-wrapper'>Jhon Smith</div>
                <div class='title text-wrapper'>Student</div>
              </div>
            </div>
            <button
              class='profile-btns'
              id='edit-btn'
              onClick={() => {
                setEdit(1)
                document.getElementById('edit-btn').style.display = 'none'
                document.getElementById('save-btn').style.display = 'block'
              }}
            >
              Edit
            </button>
            <button
              class='profile-btns'
              id='save-btn'
              onClick={() => {
                setEdit(0)
                document.getElementById('edit-btn').style.display = 'block'
                document.getElementById('save-btn').style.display = 'none'
              }}
            >
              Save
            </button>
          </div>
          <div class='user-info-modal'>
            {edit === 0 && <>{DisplayProfileInformation()}</>}
            {edit === 1 && <>{EditProfileInformation()}</>}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
