import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function Ad(){
  
  const [data, setData]= useState({
    category: "" ,
    price: "",
    details: "",
    postedBy: ""
  });
  const {category, price, details, postedBy} = data;
  function handleSubmit(event){
    event.preventDefault();
   
  }
  function handleChange(event){
       setData({
        ...data,
        [event.target.name] : event.target.value
             })

      }
    
    return (
         <Card bg="light">
          <h1 className='text-center'>Job Details</h1>
           <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="JobDetails">
                 <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Please enter Category" name="category" value={category} onChange={handleChange} />
              </Form.Group>

             <Form.Group className="mb-3" controlId="price">
               <Form.Label>Price</Form.Label>
               <Form.Control type="number" placeholder="Please enter price" name="price" value={price} onChange={handleChange} />
             </Form.Group>

             <Form.Group className="mb-3" controlId="details">
               <Form.Label>Details</Form.Label>
               <Form.Control type="textarea" placeholder="Please enter details" name="details" value={details} onChange={handleChange} />
             </Form.Group>

             <Form.Group className="mb-3" controlId="postedby">
               <Form.Label>PostedBy</Form.Label>
               <Form.Control type="text" placeholder="Please enter your name" name="postedBy" value={postedBy} onChange={handleChange}/>
             </Form.Group>
      <Button variant="primary" type="submit">
        Add to Job Applications
      </Button>
    </Form>
        </Card>
    )
}
