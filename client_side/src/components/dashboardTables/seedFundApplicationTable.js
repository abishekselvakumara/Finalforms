import React from 'react'
import { useState } from 'react'

function pagination (p) {
  console.log(p - 1)
  let pages = document.getElementsByClassName('pages')
  pages[p - 1].style.backgroundColor = '#EF6C1B'
  pages[p - 1].style.color = 'white'
  for (let i = 0; i < pages.length; i++) {
    if (i !== p - 1) {
      pages[i].style.backgroundColor = 'white'
      pages[i].style.color = 'black'
    }
  }
}

function mentorDeatils () {
  return (
    <>
      <div class='table-rows'>
        <div class='column-header'>
          <div class='col c-1'>S.No</div>
          <div class='col c-2'>Faculty Name</div>
          <div class='col c-3'>Designation</div>
          <div class='col c-4'>Department</div>
          <div class='col c-5'>Email</div>
          <div class='col c-6'>Mobile Number</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Mohan Kumar</div>
          <div class='col c-3 text-wrapper'>HOD</div>
          <div class='col c-4 text-wrapper'>AI&DS</div>
          <div id = "col-5-wrapper" class='col c-5 text-wrapper'>mohankumar@ksrct.ac.in</div>
          <div class='col c-6 text-wrapper'>9698521472</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Mohan Kumar</div>
          <div class='col c-3 text-wrapper'>HOD</div>
          <div class='col c-4 text-wrapper'>AI&DS</div>
          <div id = "col-5-wrapper" class='col c-5 text-wrapper'>mohankumar@ksrct.ac.in</div>
          <div class='col c-6 text-wrapper'>9698521472</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Mohan Kumar</div>
          <div class='col c-3 text-wrapper'>HOD</div>
          <div class='col c-4 text-wrapper'>AI&DS</div>
          <div id = "col-5-wrapper" class='col c-5 text-wrapper'>mohankumar@ksrct.ac.in</div>
          <div class='col c-6 text-wrapper'>9698521472</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Mohan Kumar</div>
          <div class='col c-3 text-wrapper'>HOD</div>
          <div class='col c-4 text-wrapper'>AI&DS</div>
          <div id = "col-5-wrapper" class='col c-5 text-wrapper'>mohankumar@ksrct.ac.in</div>
          <div class='col c-6 text-wrapper'>9698521472</div>
        </div>
      </div>
    </>
  )
}

function projectDetails () {
  return (
    <>
      <div class='table-rows'>
        <div class='column-header'>
          <div class='col c-1'>S.No</div>
          <div class='col c-2'>Title</div>
          <div class='col c-3'>Domain</div>
          <div class='col c-4'>Category</div>
          <div class='col c-5'>Patentable</div>
          <div class='col c-6'>Level</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Water Management</div>
          <div class='col c-3 text-wrapper'>IT</div>
          <div class='col c-4 text-wrapper'>Product</div>
          <div class='col c-5 text-wrapper'>Yes</div>
          <div class='col c-6 text-wrapper'>PoC</div>
        </div>
      </div>
    </>
  )
}

function projectDescription () {
  return (
    <>
      <div class='table-rows'>
        <div class='column-header'>
          <div class='col c-1'>S.No</div>
          <div class='col c-2'>Problem Statement</div>
          <div class='col c-3'>Propsed Solution</div>
          <div class='col c-4'>Uniqueness</div>
          <div class='col c-5'>Market Potential</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Statement</div>
          <div class='col c-3 text-wrapper'>Solution</div>
          <div class='col c-4 text-wrapper'>Uniqueness</div>
          <div class='col c-5 text-wrapper'>Potential</div>
        </div>
      </div>
    </>
  )
}

function budget () {
  return (
    <>
      <div class='table-rows'>
        <div class='column-header'>
          <div class='col c-1'>S.No</div>
          <div class='col c-2'>Total Project Cost</div>
          <div class='col c-3'>Seeed Fund Requested</div>
          <div class='col c-4'>Justification</div>
        </div>
        <div id='row-wrapper' class='data-wrapper'>
          <div class='col c-1 text-wrapper'>1</div>
          <div class='col c-2 text-wrapper'>Cost</div>
          <div class='col c-3 text-wrapper'>Requested</div>
          <div class='col c-4 text-wrapper'>Justification</div>
        </div>
      </div>
    </>
  )
}

function SeedFundApplication () {
  const [state, setActive] = useState(1)
  const [statePage, setActivePage] = useState(1)
  let sections = document.getElementsByClassName('section')
  function TableData () {
    if (state === 1) {
      if (sections.length > 0) {
        for (let i = 0; i < sections.length; i++) {
          if (i !== 0) {
            sections[i].style.backgroundColor = 'white'
            sections[i].style.color = 'black'
          }
        }
        sections[0].style.backgroundColor = '#EF6C1B'
        sections[0].style.color = 'white'
      }
      return mentorDeatils()
    } else if (state === 2) {
      for (let i = 0; i < sections.length; i++) {
        if (i !== 1) {
          sections[i].style.backgroundColor = 'white'
          sections[i].style.color = 'black'
        }
      }
      sections[1].style.backgroundColor = '#EF6C1B'
      sections[1].style.color = 'white'
      return projectDetails()
    } else if (state === 3) {
      for (let i = 0; i < sections.length; i++) {
        if (i !== 2) {
          sections[i].style.backgroundColor = 'white'
          sections[i].style.color = 'black'
        }
      }
      sections[2].style.backgroundColor = '#EF6C1B'
      sections[2].style.color = 'white'
      return projectDescription()
    } else if (state === 4) {
      for (let i = 0; i < sections.length; i++) {
        if (i !== 3) {
          sections[i].style.backgroundColor = 'white'
          sections[i].style.color = 'black'
        }
      }
      sections[3].style.backgroundColor = '#EF6C1B'
      sections[3].style.color = 'white'
      return budget()
    }
  }
  return (
    <>
      <div class='table-section'>
        <div
          class='section b1'
          onClick={() => {
            setActive(1)
          }}
        >
          <label class='text-wrapper'>Mentor Details</label>
        </div>
        <div
          class='section b2'
          onClick={() => {
            setActive(2)
          }}
        >
          <label class='text-wrapper'>Project Details</label>
        </div>
        <div
          class='section b3'
          onClick={() => {
            setActive(3)
          }}
        >
          <label class='text-wrapper'>Project Description</label>
        </div>
        <div
          class='section b4'
          onClick={() => {
            setActive(4)
          }}
        >
          <label class='text-wrapper'>Budget</label>
        </div>
      </div>

      <div class='dropdown-section'>
        <select
          id='table-selection'
          onChange={() => {
            const table = document.getElementById('table-selection').value
            if (table === 'Mentor Details') {
              setActive(1)
            }
            if (table === 'Project Details') {
              setActive(2)
            }
            if (table === 'Project Description') {
              setActive(3)
            }
            if (table === 'Budget') {
              setActive(4)
            }
          }}
        >
          <option>Mentor Details</option>
          <option>Project Details</option>
          <option>Project Description</option>
          <option>Budget</option>
        </select>
      </div>
      <div class='table-content'>{TableData()}</div>
      <div class='table-pagination'>
        <button class='pagination-control page-box back' disabled>
          <i class='fa fa-angle-left'></i>
        </button>
        <button
          class='pages page-box'
          id='p1'
          onClick={() => {
            setActivePage(1)
            pagination(1)
          }}
        >
          1
        </button>
        <button
          class='pages page-box p2'
          onClick={() => {
            setActivePage(2)
            pagination(2)
          }}
        >
          2
        </button>
        <button
          class='pages page-box p3'
          onClick={() => {
            setActivePage(3)
            pagination(3)
          }}
        >
          3
        </button>
        <button
          class='pages page-box p5'
          onClick={() => {
            setActivePage(4)
            pagination(4)
          }}
        >
          4
        </button>
        <button
          class='pages page-box p6'
          onClick={() => {
            setActivePage(5)
            pagination(5)
          }}
        >
          5
        </button>
        <button class='pagination-control page-box next'>
          <i class='fa fa-angle-right'></i>
        </button>
      </div>
    </>
  )
}

export default SeedFundApplication
