import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import './App.css';

class SelectedBeast extends React.Component{
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalbody">
            <img id="modal"
              src={this.props.selectedBeast.image_url}
              alt={this.props.description}/>
              <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleCloseModal}>Finished</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}




export default SelectedBeast;
