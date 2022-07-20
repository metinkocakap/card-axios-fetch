import {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container,Row,Col } from 'react-bootstrap';
import '../style.css'
function Users() {
  const [users,setUsers]=useState();
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        return res.json();
    })
    .then(data=>setUsers(data))
  })  

  return (
    <>
        <Container>
            <Col>
                <Row xl={2} lg={2} md={2} sm={1}>
                    {users && users.map(user =>(
               
                <Card className='card' key={user.id}>                    
                   <h3>{user.name}</h3>
                   <p>{user.email}</p>
                   <p>{user.phone}</p>
                   <p>{user.website}</p> 
                </Card>  
              
              
            ))
            }
                </Row>
            </Col>
        
        </Container>
    </>
  )
}

export default Users
