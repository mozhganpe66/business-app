import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Registration(){
    function handleSubmit(event){
        event.preventDefault();
        alert("It works")
    }
    return(
         <Card bg="light">
            <h1 className="text-center">Registration</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="firstname">
                 <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Please enter your first name" />
              </Form.Group>

             <Form.Group className="mb-3" controlId="lastname">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" placeholder="Please enter your last name" />
             </Form.Group>

             <Form.Group className="mb-3" controlId="email">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="Please enter email address"/>
             </Form.Group>

             <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Please enter password"/>
             </Form.Group>

             <Form.Group className="mb-3" controlId="phonenumber">
               <Form.Label>Phone Number</Form.Label>
               <Form.Control type="phone" placeholder="Please enter your phone number"/>
             </Form.Group>

             <Form.Group className="mb-3" controlId="type">
               <Form.Label>Person Type</Form.Label>
               <Form.Select aria-label="Default select example">
                   <option>Please selcet the type of person</option>
                   <option value="1">Job giver</option>
                   <option value="2">Job Taker</option>
              </Form.Select>
             </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </Card>
    )
}