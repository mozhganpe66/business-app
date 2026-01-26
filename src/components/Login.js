import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function Login(){
  let navigate = useNavigate()
  function handleSubmit(event){
    event.preventDefault();
    navigate("../Ad")
   
  }
    return (
        <Card bg="light">
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                 <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Please enter your email" />
              </Form.Group>

             <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Please enter your password" />
             </Form.Group>
             <Button variant="primary" type="submit" className='m-3'>Login</Button>
             <Button variant="secondary" type="button">Forget Password</Button>
             </Form>
        </Card>
    )
}
