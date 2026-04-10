import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import profile from '../pictures/profile.png';
import { useState } from 'react';
import './UserProfile.css';

export default function UserProfile() {
  // Separate state for each modal
  const [showHourly, setShowHourly] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <Row>
        {/* User Info */}
        <Col>
          <Card className="card" style={{ width: '20rem' }}>
            <Card.Title className='user-title'>Personal Details</Card.Title>
            <Card.Img className='user-image' src={profile} />
            <Card.Body>
              <Card.Text className="user-text">
                <p><strong>Name:</strong> Mozhgan</p>
                <p><strong>Occupation:</strong> IT Support</p>
                <p><strong>Location:</strong> Oslo, Norway</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Profile Details */}
        <Col>
          <Card style={{ width: '50rem' }}>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                
                {/* Hourly Rate */}
                <p><strong>Hourly rate:</strong></p>
                <div className='profile'>
                  <div>
                    <p className="profile-text">
                      Add hourly rate to let job givers know about your hourly rate
                    </p>
                  </div>
                  <Button variant="primary" onClick={() => setShowHourly(true)}>+ Add hourly rate</Button>
                  <Modal show={showHourly} onHide={() => setShowHourly(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Hourly rate</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="hourlyRate">
                        <Form.Label>Hourly rate</Form.Label>
                        <Form.Control type="number" placeholder="Please enter your hourly rate" />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => setShowHourly(false)}>Close</Button>
                      <Button variant="primary" onClick={() => setShowHourly(false)}>Save Changes</Button>
                    </Modal.Footer>
                  </Modal>
                </div>

                {/* Categories */}
                <p><strong>Categories:</strong></p>
                <div className='profile'>
                  <div>
                    <p className="profile-text">
                      Add Categories in which areas you are interested to let job givers know about your interested categories
                    </p>
                  </div>
                  <Button variant="primary" onClick={() => setShowCategories(true)}>+ Add categories</Button>
                  <Modal show={showCategories} onHide={() => setShowCategories(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Categories</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="categories">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Please enter your Categories Where you have expertise"
                          rows={3}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => setShowCategories(false)}>Close</Button>
                      <Button variant="primary" onClick={() => setShowCategories(false)}>Save Changes</Button>
                    </Modal.Footer>
                  </Modal>
                </div>

                {/* About */}
                <p><strong>About:</strong></p>
                <div className='profile'>
                  <div>
                    <p className="profile-text">
                      Add more info About yourself to let job givers know more about you and your interests
                    </p>
                  </div>
                  <Button variant="primary" onClick={() => setShowAbout(true)}>+ Add About</Button>
                  <Modal show={showAbout} onHide={() => setShowAbout(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>About yourself</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="about">
                        <Form.Label>About yourself</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="Please enter information about yourself" />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => setShowAbout(false)}>Close</Button>
                      <Button variant="primary" onClick={() => setShowAbout(false)}>Save Changes</Button>
                    </Modal.Footer>
                  </Modal>
                </div>

                {/* Skills */}
                <p><strong>Skills:</strong></p>
                <div className='profile'>
                  <div>
                    <p className="profile-text">
                      Add your skill sets to let job givers know about your skills
                    </p>
                  </div>
                  <Button variant="primary">+ Add skills</Button>
                </div>

                {/* Reviews */}
                <p><strong>Reviews:</strong></p>
                <div className='profile'>
                  <Button variant="primary">+ Add reviews</Button>
                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}