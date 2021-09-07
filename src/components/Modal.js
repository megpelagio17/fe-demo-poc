
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import "../components/modal.css";
import Gallery from 'react-amazon-gallery';
import classes from "../cartComponents/UI/Modal";

const MyModal = (props) => {
  
    console.log(props);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
       
        <Modal.Body>
         
          <Gallery images={props.otherImg} />
          <p>Price: ${props.price}</p>
          
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="buttonBlue" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyModal;