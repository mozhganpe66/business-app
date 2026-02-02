import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

export default function Dashboard({ tasks, id}) {
  const navigate = useNavigate();
  const params = useParams(id)
  function handleClick(event){
      navigate(`../applicants/${id}`);
  }
  return (
    <Row xs={1} md={2} className="g-2">
      {tasks.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>My Posted Tasks</Card.Title>
              <Card.Text>
                Task: {item.task} <br />
                Category: {item.category} <br />
                Status: {item.status} <br />
                Applicants: {item.applicants}
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>View Applicants</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
