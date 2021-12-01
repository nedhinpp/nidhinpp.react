import { Button, Modal} from "react-bootstrap";
function ModalPopup(props) {
  return (
    <div>
      <Modal {...props} size="lg" style={{marginTop:"18%"}}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Your message has been sent.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={props.close} className="primary_btn">Close</button>
        </Modal.Body>
       
      </Modal>
    </div>
  );
}

export default ModalPopup;
