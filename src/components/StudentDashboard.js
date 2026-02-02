import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Dashboard({ tasks }) {
  return (
    <Row xs={1} md={2} className="g-2">
      {tasks.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{item.task}</Card.Title>
              <Card.Text>
                Category: {item.category} <br />
                Status: {item.status} <br />
                Applicants: {item.applicants}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
