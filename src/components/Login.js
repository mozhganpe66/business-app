import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Login(){
  const [role, setRole] = useState("");
  let navigate = useNavigate()
  function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("userRole", role);
    
    navigate(`/dashboard/${role}`);
   
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
             <Form.Select aria-label="Default select example" onChange={(event) =>setRole(event.target.value)}>
                  <option>Please select one of the Login Options</option>
                  <option value="jobGiver">Jobgiver</option>
                  <option value="student">Student</option>
            </Form.Select>
             <Button variant="primary" type="submit" className='m-3'>Login</Button>
             <Button variant="secondary" type="button">Forget Password</Button>
             </Form>
        </Card>
    )
}
