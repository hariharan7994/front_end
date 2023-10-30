import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <div className='p-5'>
              <hr/>
            <Row className='mt-3 p-2'>
                
                <Col lg={3} md={6} sm={12} xs={12} >
                <img
              alt=""
              src="https://i.postimg.cc/pTJmRkMv/30778-3-video-icon-transparent.png"
              width="20"
              height="20"
              className="d-inline-block align-top me-1 mt-2"
            />
            {' '}
         <b className='fs-4'><span>V</span>ideo<span> U</span>ploader</b>
          <h5 className='mt-2 p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>
              <h4>LINKS</h4>
              <a className='fs-5' style={{textDecoration:'none',color:'red'}} href=''>Landingpage</a><br/>
              <a className='fs-5' style={{textDecoration:'none',color:'red'}} href=''>Home</a><br/>
            <a className='fs-5' style={{textDecoration:'none',color:'red'}} href=''>Watch History</a>
                </Col>

                <Col lg={3} md={6} sm={12} xs={12}>
             <h4 className='text-danger'>Guides</h4>
             <h5>react</h5>
             <h5>react</h5>
             <h5>react</h5>

             
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
               <h4 className='text-danger'>Contact US</h4>
               <input type='text' className='form-control w-75' placeholder='enter mail'/>
            <button className='btn btn-danger w-75 mt-3'>Send</button><br/>
            <i class="fa-brands fa-instagram text-white fa-2x mt-3"></i>
            <i class="fa-brands fa-facebook text-white fa-2x mt-3 ms-4"></i>
            <i class="fa-brands fa-twitter text-white fa-2x mt-3 ms-4"></i>
            <i class="fa-brands fa-github text-white fa-2x mt-3 ms-4"></i>
            <i class="fa-brands fa-whatsapp text-white fa-2x mt-3 ms-4"></i>
              </Col>             
            </Row>
            </div>
        </div>
    )
}

export default Footer