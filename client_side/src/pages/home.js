import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from '../assets/img.png'
import Third1 from '../assets/1.png'
import Third2 from '../assets/2.png'
import Third3 from '../assets/3.png'
import Four1 from '../assets/section4.png'
import Five1 from '../assets/5.1.png'
import Five2 from '../assets/5.2.png'
import Five34 from '../assets/5.3 & 5.4.png'
import Five5 from '../assets/5.5.png'
import Five6 from '../assets/5.6.png'
import Five7 from '../assets/5.7.png'
import Five8 from '../assets/5.8.png'
import Five9 from '../assets/5.9.png'
import Five10 from '../assets/5.10.png'
import Five11 from '../assets/5.11.png'
import Five12 from '../assets/5.12.png'
import Six1 from '../assets/6.1.png'
import Six2 from '../assets/6.2.png'
import Six3 from '../assets/6.3.png'
import Six4 from '../assets/6.4.png'
import Six5 from '../assets/6.5.png'
import Six6 from '../assets/6.6.png'
import seven1 from '../assets/7.3.png'
import TopNav from '../components/homeTopNav'
import '../styles/mainHome.css'

function Home() {
  return (
    <>
      <div>
        <div className='rect'>
        </div>
        <div className='expo'>
          <Row className=' posi'>
          <TopNav/>
            <Col lg={12} sm={12} xs={12} className='mt-5'>
              <div className='homeSecond'>
                <div className='leftSecond'>
                  <div>
                    <h className='text-white texthead'>KSRCT AICTE IDEA Lab</h>
                    <p className='pt-4 text-white' style={{ fontSize: '18.5px' }} >Discover a collaborative hub dedicated to nurturing creativity, empowering students, and igniting groundbreaking ideas. Together, let’s redefine possibilities and drive positive change in the world.”</p>
                    <div className='mt-5 d-flex sbutn'>
                      <button className='getinvole'>Get Involved</button>
                      <button className='submitidea'>Submit Your Idea</button>
                    </div>
                  </div>
                </div>
                <div className='rightSecond'>
                  <img className='rightSecondimg' src={Img} />
                </div>
              </div>
            </Col>
            <Col lg={12} sm={12} className='homethird mt-5 '>
              <div className='thirdleft m-3'>
                <div className='m-4'>
                  <div className='mb-4'><img src={Third1} style={{ width: '50%', height: '50%' }} /></div>
                  <h style={{ fontSize: '24px', color: '#25133f' }}>Innovation Workshops, Industry Talks and Seminars</h>
                  <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>FSE block builder is the way of creating site and our customizable features added value on.</p>
                  <a href='#' className='mt-4' style={{ fontSize: '17px', color: '#747474', textDecoration: 'none' }}>Learn More</a>
                </div>
              </div>
              <div className='thirdcenter m-3'>
                <div className='m-4'>
                  <div className='mb-4'><img src={Third2} style={{ width: '50%', height: '50%' }} /></div>
                  <h className='mt-1' style={{ fontSize: '24px', color: '#25133f' }}>Hackathons, Idea-a-thons and Project Showcases</h>
                  <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>FSE block builder is the way of creating site and our customizable features added value on.</p>
                  <a href='#' className='mt-4' style={{ fontSize: '17px', color: '#747474', textDecoration: 'none' }}>Learn More</a>
                </div>
              </div>
              <div className='thirdright m-3'>
                <div className='m-4'>
                  <div className='mb-4'><img src={Third3} style={{ width: '50%', height: '50%' }} /></div>
                  <h className='mt-1' style={{ fontSize: '24px', color: '#25133f' }}>Social Networking Initiatives and Mentorship Programs</h>
                  <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>While it comes with native builder FSE/Block builder and Elementor, making so easy.</p>
                  <a href='#' className='mt-4' style={{ fontSize: '17px', color: '#747474', textDecoration: 'none' }}>Learn More</a>
                </div>
              </div>
            </Col>
            <section id='about'>
              <Col lg={12} sm={12} className='homeFour mt-4' style={{ gap: '60px' }}>
                <div className='leftFour mt-5'>
                  <div>
                    <div className='mt' style={{ fontSize: '24px', color: '#515151' }}>About KSRCT-Idealab</div>
                    <div className='mt-4' style={{ fontSize: '36px', color: '#25133f', fontWeight: '600', lineHeight: '1.3' }}>An Envision of a Brighter Future Through Transformative Innovations</div>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474', letterSpacing: '0.2px', lineHeight: '1.7' }}>Welcome to the Idea Lab at K S Rangasamy College of Technology—an innovative hub igniting creativity and entrepreneurial spirit. With advanced resources and expert guidance, we empower students to explore their imaginative potential, conceive groundbreaking solutions, and shape the future. Our dynamic ecosystem fosters collaboration, offering a platform for students to refine their ideas, build prototypes, and develop viable ventures. Join us on this transformative journey, where ideas come to life and entrepreneurs flourish.</p>
                    <button className='readmore mt-2'>Read More</button>
                  </div>
                </div>
                <div className='rightFour'>
                  <div >
                    <img src={Four1} style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
              </Col>
            </section>
            <Col lg={12} sm={12} className='homeFive mt-5' style={{ gap: '60px' }}>
              <div className='w-100 d-flex justify-content-center'><h style={{ fontSize: '34px', fontWeight: '700' }}>Services Provided</h></div>
              <div className='mt-4 externalimgbox'>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five1} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Training</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five2} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Seed Fund</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five34} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Development</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five34} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Mentoring</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five5} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Incubation</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five6} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Internship</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five7} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Start-up</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five8} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Commercialization</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five9} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Consultancy</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five10} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Marketing</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five11} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>IPR</h></div>
                <div className='mt-2 imgbox d-flex flex-column'><img src={Five12} className='fiveimg' /><h style={{ fontSize: "18px" }} className='text-center'>Networking</h></div>
              </div>
            </Col>
            <Col lg={12} sm={12} className='mt-5 d-flex justify-content-center align-items-center sixhead'>
              <div className='homesix'>
                <div style={{ fontSize: '40px', color: '#fefefe', fontWeight: '500' }} className='mt-4' >Infrastructure</div>
                <div style={{ fontSize: '20px', color: '#fefefe', fontWeight: '400' }} className='mt-3'>Equipped with cutting-edge facilities, collaborative workspaces, and advanced technology, fostering an environment conducive to innovation and creative exploration.</div>
                <div className='mt-4 d-flex justify-content-evenly flex-wrap'>
                  <div className='d-flex flex-column text-center'><img src={Six1} className='imgchange' /><h className='m-3' style={{ fontSize: '19px', color: '#fefefe', fontWeight: '500' }}>Design Wing</h></div>
                  <div className='d-flex flex-column text-center'><img src={Six2} className='imgchange' /><h className='m-3' style={{ fontSize: '19px', color: '#fefefe', fontWeight: '500' }}>Electronics Wing</h></div>
                  <div className='d-flex flex-column text-center'><img src={Six3} className='imgchange' /><h className='m-3' style={{ fontSize: '19px', color: '#fefefe', fontWeight: '500' }}>Mechanical Wing</h></div>
                  <div className='d-flex flex-column text-center'> <img src={Six4} className='imgchange' /><h className='m-3' style={{ fontSize: '19px', color: '#fefefe', fontWeight: '500' }}>Machine Wing</h></div>
                  <div className='d-flex flex-column text-center'><img src={Six5} className='imgchange' /><h className='m-3' style={{ fontSize: '19px', color: '#fefefe', fontWeight: '500' }}>Special Machines Wing</h></div>
                  <div className='d-flex flex-column text-center'><img src={Six6} className='imgchange' /><h className='m-3' style={{ fontSize: '19px', color: '#fefefe', fontWeight: '500' }}>Start-up Wing</h></div>
                </div>
              </div>
            </Col>
            <Col lg={12} sm={12} className='mt-5 d-flex justify-content-center '>
              <div className='d-flex flex-column'>
                <div className='mt-4 text-center h2' style={{ color: '#25133f', fontWeight: '500' }}>The Process Flow – IdeaLab</div>
                <div className='mt-4'><img src={seven1} style={{ width: '100%', height: '100%' }} /></div>
              </div>
            </Col>
            <Col lg={12} sm={12} className='mt-5 ' style={{ backgroundColor: '#FBF9FE' }}>
              <div className='h2 text-center mt-4' style={{ fontWeight: '500', color: '#25133f' }}>KSRCT-IdeaLab <b>: Event Calendar</b> (Based on)</div>
              <div className='homethird'>
                <div className='eightleft m-3 mb-0'>
                  <div className='m-4'>
                    <div className='mb-4'><img src={Third1} style={{ width: '50%', height: '50%' }} /></div>
                    <h style={{ fontSize: '22px', color: '#ef6c1b' }}>Faculty Development Programs</h>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474', lineHeight: '1.5' }}>Igniting Excellence in Teaching: Faculty Development for Tomorrow’s Leaders.</p>
                  </div>
                </div>
                <div className='eightcenter m-3 mb-0'>
                  <div className='m-4'>
                    <div className='mb-4'><img src={Third2} style={{ width: '50%', height: '50%' }} /></div>
                    <h className='mt-1' style={{ fontSize: '22px', color: '#ef6c1b' }}>Professional Skilling Programmes</h>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Skill Up, Rise Above: Thriving in a Competitive World</p>
                  </div>
                </div>
                <div className='eightright m-3 mb-0'>
                  <div className='m-4'>
                    <div className='mb-4'><img src={Third3} style={{ width: '50%', height: '50%' }} /></div>
                    <h className='mt-1' style={{ fontSize: '22px', color: '#ef6c1b' }}>Skilling Programmes</h>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Skills for Tomorrow: Embrace Innovation Today.</p>
                  </div>
                </div>
                <div className='eightleft m-3'>
                  <div className='m-4'>
                    <div className='mb-4'><img src={Third1} style={{ width: '50%', height: '50%' }} /></div>
                    <h style={{ fontSize: '22px', color: '#ef6c1b' }}>Annual Conferences</h>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Inspiring Excellence: AICTE Idealab Annual Innovation Showcase</p>
                  </div>
                </div>
                <div className='eightcenter m-3'>
                  <div className='m-4'>
                    <div className='mb-4'><img src={Third2} style={{ width: '50%', height: '50%' }} /></div>
                    <h className='mt-1' style={{ fontSize: '22px', color: '#ef6c1b' }}>Ideation Workshops</h>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Where Ideas Take Flight: Ideation Workshops for Inspired Thinkers</p>
                  </div>
                </div>
                <div className='eightright m-3'>
                  <div className='m-4'>
                    <div className='mb-4'><img src={Third3} style={{ width: '50%', height: '50%' }} /></div>
                    <h className='mt-1' style={{ fontSize: '22px', color: '#ef6c1b' }}>Awareness workshops</h>
                    <p className='mt-4' style={{ fontSize: '18px', color: '#747474' }}>Fueling Curiosity, Igniting Innovation: Register for our Awareness Workshops.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} sm={12} className='mt-3 d-flex flex-column justify-content-center align-items-center eighthead'>
              <div style={{ color: '#fefefe', fontWeight: '500' }} className='mt-4 text-center needfont' >Need Support in Ideation & Development?</div>
              <div style={{ width: '120px', borderBottom: '3px solid #fff' }} className='mt-4'></div>
              <p style={{ fontSize: '20px', color: '#d6d6d6', fontWeight: '400' }} className='mt-4 text-center'>Our expert mentors offer hands-on guidance to refine your innovative projects. From idea to reality, our collaborative approach ensures success. Connect with us for a lasting impact in the world of innovation.</p>
              <button className='visitbtn mt-3 mb-3'>Schedule an Visit</button>
            </Col>
            <Col lg={12} sm={12} className='homenine mt-4'>
              <div className='leftNine'>
                <div>
                  <div className='mt-4' style={{ fontSize: '40px', color: '#25133f', fontWeight: '600', lineHeight: '1.3' }}>Be Part of Our Network!</div>
                  <p className='mt-4' style={{ fontSize: '18px', color: '#747474', letterSpacing: '0.2px', lineHeight: '1.7' }}>Join our thriving network of innovators, entrepreneurs, and creative minds. Collaborate, share ideas, and shape the future of innovation. Together, we foster continuous learning, support, and inspiration, propelling ideas to new heights. Embrace connections, unlock opportunities, and make a meaningful impact within our vibrant community</p>
                </div>
              </div>
              <div className='rightNine'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.6157450730943!2d77.82534407481398!3d11.362751988823948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba964016c607823%3A0x580736a65c2b0005!2sK.S.Rangasamy%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1710829971103!5m2!1sen!2sin" className='map' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>
            <Col lg={12} sm={12} className='hfooter mt-5'>
              
              <div className='subfooter ms-2 mt-4 mb-2'>
                <div style={{ fontSize: "24px", color: "#fefefe", fontWeight: "600" }}>KSRCT – AICTE IDEA Lab</div>
                <p style={{ fontSize: "16px", color: "#fefefe", lineHeight: "1.7" }} className='mt-3'>KSRCT – AICTE IDEA Lab aims at providing opportunity for the students to apply Science, Technology Engineering and Mathematics (STEM) fundamentals to gain a deeper understanding of the subject matter through hands-on experiences, learning by doing and developing innovative solutions to societal problems.</p>
              </div>
              <div className='subfooter2 ms-2 '>
                <div style={{ fontSize: "24px", color: "#fefefe", fontWeight: "600" }} className='mt-2'>Quick Menu</div>
                <div className='d-flex flex-column mt-3' style={{lineHeight: "2"}}>
                  <a href='#' style={{ fontSize: '16px', color: '#fefefe', textDecoration: 'none' }} className='w-50'>About us</a>
                  <a href='#' style={{ fontSize: '16px', color: '#fefefe', textDecoration: 'none' }} className='w-25'>Blog</a>
                  <a href='#' style={{ fontSize: '16px', color: '#fefefe', textDecoration: 'none' }} className='w-25'>AICTE</a>
                  <a href='#' style={{ fontSize: '16px', color: '#fefefe', textDecoration: 'none' }} className='w-50'>At a glance</a>
                  <a href='#' style={{ fontSize: '16px', color: '#fefefe', textDecoration: 'none' }} className='w-25'>Media</a>
                </div>
              </div>
              <div className='subfooter ms-2'>
                <div style={{ fontSize: "24px", color: "#fefefe", fontWeight: "600" }} className='mt-4'>Contact</div>
                <div style={{ fontSize: "16px", color: "#fefefe",lineHeight: "2"}} className='mt-3 d-flex flex-column'>
                  <span>KSRCT – AICTE IDEA LAB</span>
                  <span>K.S.RANGASAMY COLLEGE OF TECHNOLOGY</span>
                  <span>K.S.R. Kalvi Nagar, (Tiruchengode – Erode State</span>
                  <span>Highway) Tiruchengode – 637215, Namakkal (Dt.),</span>
                  <span>Tamil Nadu, India.</span>
                  <span className='mt-3 mb-4'>+91 94455 88688 | idealab@ksrct.ac.in</span>
                </div>
              </div>
              <div className='mb-3 w-100 text-center' style={{ fontSize: "16px", color: "#fefefe",lineHeight: "2"}}>© 2023 KSRCT-IdeaLab. All Rights Reserved.</div>
            </Col>
          </Row>
        </div>
      </div >
    </>
  )
}

export default Home;