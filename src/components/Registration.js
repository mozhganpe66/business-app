import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Registration.css';
export default function Registration(){
    function handleSubmit(event){
        event.preventDefault();
        alert("It works")
    }
    return(
         <Card className="m-5 w-60 register">
            <h1 className="text-center">Registration</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 w-50" controlId="firstname">
                 <Form.Label className='px-4'>First Name</Form.Label>
                <Form.Control className='mx-4' type="text" placeholder="Please enter your first name" />
              </Form.Group>

             <Form.Group className="mb-3 w-50" controlId="lastname">
               <Form.Label className='px-4'>Last Name</Form.Label>
               <Form.Control className='mx-4' type="text" placeholder="Please enter your last name" />
             </Form.Group>

             <Form.Group className="mb-3 w-50" controlId="email">
               <Form.Label className='px-4'>Email</Form.Label>
               <Form.Control className='mx-4' type="email" placeholder="Please enter email address"/>
             </Form.Group>

             <Form.Group className="mb-3 w-50" controlId="password">
               <Form.Label className='px-4'>Password</Form.Label>
               <Form.Control className='mx-4' type="password" placeholder="Please enter password"/>
             </Form.Group>

             <Form.Group className="mb-3 w-50" controlId="phonenumber">
               <Form.Label className='px-4'>Phone Number</Form.Label>
               <Form.Control className='mx-4'type="phone" placeholder="Please enter your phone number"/>
             </Form.Group>

             <Form.Group className="mb-3 w-50" controlId="type">
               <Form.Label className='px-4'>Person Type</Form.Label>
               <Form.Select className='mx-4' aria-label="Default select example">
                   <option>Please selcet the type of person</option>
                   <option value="1">Job giver</option>
                   <option value="2">Job Taker</option>
              </Form.Select>
             </Form.Group>
      <Button className='m-4' variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </Card>
        
    )
}