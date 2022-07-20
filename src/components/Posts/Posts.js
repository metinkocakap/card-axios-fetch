import {useEffect,useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col } from 'react-bootstrap';
import '../style.css'

function Posts() {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data))
    },[]);

  return (
    <>
      <Container>
            <Col>
                <Row xl={2} lg={2} md={2} sm={1}>
                    {posts && posts.map(post =>(
               
                <Card className='card' key={post.id}>                    
                   <h3>{post.title}</h3>
                   <p>{post.body}</p>
           
                </Card>  
              
              
            ))
            }
                </Row>
            </Col>
        
        </Container>
    </>
  )
}

export default Posts
