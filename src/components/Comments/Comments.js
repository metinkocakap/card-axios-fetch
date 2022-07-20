import {useEffect,useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col } from 'react-bootstrap';
import '../style.css'

function Comments() {
    const[comments,setComments]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => setComments(res.data))
    },[]);

  return (
    <>
      <Container>
            <Col>
                <Row xl={2} lg={2} md={2} sm={1}>
                    {comments && comments.map(comment =>(
               
                <Card className='card' key={comment.id}>                    
                <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
           
                </Card>  
              
              
            ))
            }
                </Row>
            </Col>
        
        </Container>
    </>
  )
}

export default Comments
