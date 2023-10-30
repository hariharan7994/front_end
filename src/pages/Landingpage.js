import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className='mt-5'>
              <h1><span>V</span>ideo <span>U</span>ploader </h1>
              <p className='fs-4 mt-4 p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <Link to={'/home'}>
                <Button id='b1' className='btn ms-3'><b>Get Started</b><i class="fa-brands fa-google-play fa-fade ms-3"></i></Button>
              </Link>
            </div>
          </Col>

          <Col>
            <img className='w-100' src='https://i.postimg.cc/Px9Yntps/2.gif' alt='' />
          </Col>

        </Row>
        <hr />
        <Row className='mt-5 mb-5 py-5'>
          <h1 className='mb-5 text-center'><span>F</span>eatures</h1>
          <Col>
            <Card className='bg-black border-dark  text-dark' style={{ width: '100%' }}>
              <Card.Img style={{ height: '300px' }} variant="top" src="https://i.postimg.cc/bJ5CVDQQ/ani.gif" />
              <Card.Body className='p-5'>
                <Card.Title><h4 className='mb-4 text-center'><span>M</span>anaging <span>V</span>ideos</h4></Card.Title>
                <Card.Text className='text-center'>
                  <p>Some quick example text to build on the card title and make up the
                    bulk of the card's content.</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-black border-dark text-dark' style={{ width: '100%' }}>
              <Card.Img style={{ height: '300px' }} variant="top" src="https://i.postimg.cc/h43DBc8v/l.gif" />
              <Card.Body className='p-5'>
                <Card.Title><h4 className='mb-4 text-center'><span>C</span>ategories <span>V</span>ideos</h4></Card.Title>
                <Card.Text className='text-center'>
                  <p>Some quick example text to build on the card title and make up the
                    bulk of the card's content.</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-black border-dark text-dark' style={{ width: '100%' }}>
              <Card.Img style={{ height: '300px' }} variant="top" src="https://i.postimg.cc/QtHQnjk5/musicbarsr-hw6s6kvk.gif" />
              <Card.Body className='p-5'>
                <Card.Title><h4 className='mb-4 text-center'><span>W</span>atch <span>H</span>istory</h4></Card.Title>
                <Card.Text className='text-center'>
                  <p>Some quick example text to build on the card title and make up the
                    bulk of the card's content.</p>
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>



    </div>
  )
}

export default Landingpage