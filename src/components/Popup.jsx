import React, {Component} from 'react';
import '../index.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createAd } from '../actions/adActions';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Modal,
  Well,
} from 'react-bootstrap';

class Popup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modal: {},
      formErrors: {title: '', phone: '', price: ''},
      titleValid: false,
      phoneValid: false,
      priceValid: false,
      formValid: false,
      show: false,
    };
  
    this.handleInput = this.handleInput.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.resetModal = this.resetModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateField = this.validateField.bind(this);
  
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    console.log('MODAL: ', this.state.modal);
    this.props.createAd(this.state.modal);
    this.resetModal();
    this.handleHide();
  };
  
  resetModal() {
    this.setState({modal: {}, priceValid: false, phoneValid: false, titleValid: false});
  }
  
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    let phoneValid = this.state.phoneValid;
    let priceValid = this.state.priceValid;
    
    switch (fieldName) {
      case 'title':
        titleValid = value.length >= 5;
        fieldValidationErrors.title = titleValid ? '' : ' is too short';
        break;
      case 'phone':
        phoneValid = value.match(/^[+]?[\d\s/-]{7,15}$/);
        fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
        break;
      case 'price':
        priceValid = !isNaN(parseInt(value, 10));
        fieldValidationErrors.price = priceValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    
    this.setState({
      formErrors: fieldValidationErrors,
      titleValid: titleValid,
      phoneValid: phoneValid,
      priceValid: priceValid,
    }, this.validateForm);
  }
  
  validateForm() {
    this.setState({
      formValid: this.state.titleValid &&
        this.state.phoneValid && this.state.priceValid,
    });
  }
  
  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({modal: {...this.state.modal, [name]: value}},
        () => { this.validateField(name, value); });
  }
  
  handleHide() {
    this.setState({show: false});
  }
  
  render() {
    return (
        <div>
          <button className="modal__new" onClick={() => this.setState({show: true})}> </button>
          <Modal
              show={this.state.show}
              onHide={this.handleClose}
              container={this}
              aria-labelledby="contained-modal-title"
              className="form__box">
            <FormGroup
                className="form__group"
                controlId="formBasicText">
              <ControlLabel>New Ad</ControlLabel>
              <FormControl
                  type="text"
                  name="title"
                  value={this.state.modal.title}
                  placeholder="What are you selling?"
                  onChange={this.handleInput}/>
              <FormControl
                  name="phone"
                  value={this.state.modal.phone}
                  placeholder="Your phone"
                  onChange={this.handleInput}/>
              <FormControl
                  name="price"
                  value={this.state.modal.price}
                  placeholder="Price"
                  onChange={this.handleInput}/>
              <FormControl
                  name="currency"
                  type="text"
                  value={this.state.modal.currency}
                  placeholder="Currency"
                  onChange={this.handleInput}/>
              <FormControl
                  name="picUrl"
                  value={this.state.modal.picUrl}
                  placeholder="Pic url"
                  onChange={this.handleInput}/>
              <FormControl
                  name="description"
                  type="text"
                  value={this.state.modal.description}
                  placeholder="Description"
                  onChange={this.handleInput}/>
            </FormGroup>
              <div className='form__errors'>
                {
                  Object.keys(this.state.formErrors).map((fieldName, i) => {
                    if (this.state.formErrors[fieldName].length > 0)
                      return <Well
                          key={i}>Warning: {fieldName} {this.state.formErrors[fieldName]}</Well>;
                  })
                }
              </div>
            <Modal.Footer>
              <Button
                  type="submit"
                  bsStyle="success"
                  onClick={this.onSubmit}
                  disabled={!this.state.formValid}>
                Submit
              </Button>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  };
};

Popup.propTypes = {
  createAd: PropTypes.func.isRequired
}

export default connect(null, { createAd })(Popup);
