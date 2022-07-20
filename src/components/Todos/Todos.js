import {useEffect,useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col } from 'react-bootstrap';
import '../style.css'

function Todos() {
    const[todos,setTodos]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setTodos(res.data))
    },[]);

  return (
    <>
      <Container>
            <Col>
                <Row xl={2} lg={2} md={2} sm={1}>
                    {todos && todos.map(todo =>(
               
                <Card className='card' key={todo.id}>                    
                   <h3>{todo.id}</h3>
                   <p>{todo.title}</p>
           
                </Card>  
              
              
            ))
            }
                </Row>
            </Col>
        
        </Container>
    </>
  )
}

export default Todos
