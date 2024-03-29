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

function ScheduleVisitTable () {
  const [state, setActive] = useState(1)
  return (
    <>
      <div class='table-content'>
        <div class='column-header'>
          <div class='col c-1'>S.No</div>
          <div class='col c-2'>Date of Visit</div>
          <div class='col c-3'>In Time</div>
          <div class='col c-4'>Purpose</div>
          <div class='col c-5'>No.of Visitors</div>
          <div class='col c-6'>Accommodation</div>
          <div class='col c-7'>No.of Days</div>
          <div class='col c-8' id='c8'>
            Check in Date and Time
          </div>
          <div class='col c-9' id='c9'>
            Check out Date and Time
          </div>
        </div>
        <div class='table-rows'>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
          <div id='row-wrapper' class='data-wrapper'>
            <div class='col c-1 text-wrapper'>1</div>
            <div class='col c-2 text-wrapper'>11/03/2024</div>
            <div class='col c-3 text-wrapper'>9:00</div>
            <div class='col c-4 text-wrapper'>3D</div>
            <div class='col c-5 text-wrapper'>5</div>
            <div class='col c-6 text-wrapper'>Yes</div>
            <div class='col c-7 text-wrapper'>14</div>
            <div class='col c-8 text-wrapper'>
              11/03/2024 <br></br>4:00
            </div>
            <div class='col c-9 text-wrapper'>
              25/03/2024 <br></br>9:00
            </div>
          </div>
        </div>
      </div>
      <div class='table-pagination'>
        <button class='pagination-control page-box back' disabled>
          <i class='fa fa-angle-left'></i>
        </button>
        <button
          class='pages page-box'
          id='p1'
          onClick={() => {
            setActive(1)
            pagination(1)
          }}
        >
          1
        </button>
        <button
          class='pages page-box p2'
          onClick={() => {
            setActive(2)
            pagination(2)
          }}
        >
          2
        </button>
        <button
          class='pages page-box p3'
          onClick={() => {
            setActive(3)
            pagination(3)
          }}
        >
          3
        </button>
        <button
          class='pages page-box p5'
          onClick={() => {
            setActive(4)
            pagination(4)
          }}
        >
          4
        </button>
        <button
          class='pages page-box p6'
          onClick={() => {
            setActive(5)
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

export default ScheduleVisitTable
