import React from 'react';
import $ from 'jquery';

import {Modal} from 'react-bootstrap'; 
class ModalExample extends React.Component {
 
  render(){
    let closeModal = () => this.setState({ open: false })
 
    let saveAndClose = () => {
      api.saveData()
        .then(() => this.setState({ open: false }))
    }
 
    return (
      <div>
        <button type='button'>Launch modal</button>
 
        <Modal 
          show={this.state.open} 
          onHide={closeModal}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Some Content here</p>
          </Modal.Body>
          <Modal.Footer>

            <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
 
            <button className='btn btn-primary' onClick={saveAndClose}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
