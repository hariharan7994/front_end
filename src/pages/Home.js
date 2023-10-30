import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'


function Home() {
  const [addUpdate,setUpdate]=useState({})
  return (
    <div>
      <Row>
        <Col className='mt-5'>

        <h2 className='ms-5 ps-5 mb-4'>
          <b><span>S</span>tart <span>U</span>ploading <span>V</span>ideo <span>F</span>or <span>F</span>ree</b>
        </h2>

        <div className='ms-5 ps-5'>
          <Link to={'/watch-history'} style={{textDecoration: 'none'}}>
          <a className='text-warning  fs-3' style={{ textDecoration: 'none', fontFamily: 'Satisfy, cursive' }} >
            <i class="fa-solid fa-clock fa-spin text-light mt-2"></i> View Watch History

          </a>
          </Link>
          <p className='mt-3 fs-5'>Lorem ipsum dolor sit amet. Non itaque sachitecto non voluptatibus odio nam magnam doloribus.
                  tas et voluptate dolore. Aut veniam necessitatr</p>

        </div>
        </Col>
        <Col className='text-center'>
        <img style={{width:'400px',height:'200px'}} src='https://i.postimg.cc/25xNhXMM/utube-removebg-preview.png' alt='' />
        </Col>
      </Row>
      <hr/>

      <Row className='p-5'>
        <Col lg={1}>

          <Add update={setUpdate}></Add>

        </Col>
        <Col lg={7}>

          <View updatedState={addUpdate}></View>

        </Col>
        <Col lg={4}>

          <Categories></Categories>

        </Col>

      </Row>
    </div>
  )
}

export default Home