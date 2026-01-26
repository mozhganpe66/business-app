
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';

export default function ApplyTask(){
    const navigate = useNavigate();
    function handelSubmit(event){
        event.preventDefault();
        navigate('../AreYouSure')
    }
    function handelCancle(event){
        event.preventDefault();
        navigate('../Task/1')
    }
    return (       

    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            <lable>Price</lable>
            <input type="number" />
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <label>Message</label>
            <textarea/>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handelSubmit}>Submit bid</Button>
          <Button variant="secondary" onClick={handelCancle}>Cancle</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}


 