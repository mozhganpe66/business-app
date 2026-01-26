import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import profile from '../pictures/profile.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './UserProfile.css';
export default function UserProfile(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
        <Row>
            <Col>
             <Card className="card" style={{ width: '20rem' }}>
        <Card.Title className='user-title'>
            Personal Details
        </Card.Title>
      <Card.Img className='user-image' src={profile} />
      <Card.Body>
        <Card.Text className="user-text">
         <p><strong>Name:</strong>Mozhgan</p>
         <p><strong>Occupation:</strong> IT Support</p>
         <p><strong>Location:</strong> Oslo, Norway</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

        <Col>
        <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title>
            Experience
        </Card.Title>
        <Card.Text>
         <p><strong>Hourly rate:</strong></p>
         <div className='profile'>
         <div>
          <p className="profile-text">Add hourly rate to let job givers know about your hourly rate</p>
         </div>
         <Button variant="primary" onClick={handleShow}> + Add hourly rate</Button>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hourly rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="email">
                 <Form.Label>Hpurly rate</Form.Label>
                <Form.Control type="number" placeholder="Please enter your hourly rate" />
              </Form.Group></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
         </div>
         
         <p><strong>Categories:</strong></p>
         <div className='profile'>
         <div>
          <p className="profile-text">Add Categories in which areas you are interested to let job givers know about your interested categories</p>
         </div>
         <Button variant="primary"> + Add categories</Button>
         </div>
         <p><strong>About:</strong></p>
         <div className='profile'>
         <div>
          <p className="profile-text">Add more info About yourself to let job givers know more about you and your interests</p>
         </div>
         <Button variant="primary"> + Add about</Button>
         </div>
         <p><strong>Skills:</strong></p>
          <div className='profile'>
         <div>
          <p className="profile-text">Add your skill sets to let job givers know about your skills</p>
         </div>
         <Button variant="primary"> + Add skills</Button>
         </div>
         <p><strong>Reviews:</strong></p>
         <div className='profile'>
         <Button variant="primary"> + Add reviews</Button>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        </Row>
           
        </div>
        
    )
}