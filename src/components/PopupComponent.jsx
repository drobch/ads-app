import React, {Component} from 'react';
import '../index.css';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  Modal,
} from 'react-bootstrap';

class PopupComponent extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    
    this.handleHide = this.handleHide.bind(this);
    
    this.state = {
      value: '',
      show: false,
    };
  };
  
  handleHide() {
    this.setState({show: false});
  }
  
  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  render() {
    return (
        <div >
          <button className="modal__new"
                  onClick={() => this.setState({show: true})}></button>
          <Modal
              show={this.state.show}
              onHide={this.handleClose}
              container={this}
              aria-labelledby="contained-modal-title"
              className="form__box">
            <FormGroup
                className="form__group"
                controlId="formBasicText"
                validationState={this.getValidationState()}>
              <ControlLabel>New Ad</ControlLabel>
              <FormControl
                  type="text"
                  value={this.state.title}
                  placeholder="What are you selling?"
                  onChange={this.handleChange}/>
              <FormControl
                  type="text"
                  value={this.state.description}
                  placeholder="Description"
                  onChange={this.handleChange}/>
              <FormControl
                  type="text"
                  value={this.state.phone}
                  placeholder="Your phone"
                  onChange={this.handleChange}/>
              <FormControl
                  type="text"
                  value={this.state.price}
                  placeholder="Price"
                  onChange={this.handleChange}/>
              <FormControl
                  type="text"
                  value={this.state.currency}
                  placeholder="Currency"
                  onChange={this.handleChange}/>
            </FormGroup>
            <Modal.Footer>
              <Button bsStyle="success">Submit</Button>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  };
  
}

export default PopupComponent;
