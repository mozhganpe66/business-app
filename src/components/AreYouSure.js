import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';
export default function AreYouSure(){
    const navigate = useNavigate();
    function handelYes(event){
        event.preventDefault();
        navigate('../BidSubmitted')
    }
     function handelNo(event){
        event.preventDefault();
        navigate('../task/1')
    }
    return (
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            Confirmation
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Are you sure you want to submit the application? 
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handelYes}>Yes</Button>
          <Button variant="secondary" onClick={handelNo}>No</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    )
}