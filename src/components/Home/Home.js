import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Col,Row } from 'react-bootstrap';
function Home() {
  return (
    <>
<Container className='position-absolute top-50 start-50 translate-middle'>
 <Row >
    <Col>
        <Card>
        <Link to='users' className='text-decoration-none text-black p-5 fw-bolder'> Users Click </Link>
        </Card>
    </Col>

    <Col>
        <Card>
        <Link to='todos' className='text-decoration-none text-black  p-5 fw-bolder'> Todos Click </Link>
        </Card>
    </Col>

    <Col>
        <Card>
        <Link to='posts' className='text-decoration-none text-black  p-5 fw-bolder'> Posts Click </Link>
        </Card>
    </Col>

    <Col>
        <Card>
        <Link to='comments' className='text-decoration-none text-black  p-5 fw-bolder'> Comments Click </Link>
        </Card>
    </Col>

 </Row>
</Container> 
    </>
  )
}

export default Home
