import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';
import { closeModal } from '../action_creators';
import { connect } from 'react-redux';
import { SubmitForm } from '../components/SubmitForm';

//Validation for the form fields
const validate = values => {
	const errors = {};
	
	if(!values.haikuLine1) {
		errors.haikuLine1 = 'Required'
	} else if (values.haikuLine1.length < 5) {
		errors.haikuLine1 = 'Must be 5 syllables'
	}
	
	if(!values.haikuLine2) {
		errors.haikuLine2 = 'Required'
	} else if (values.haikuLine2.length < 7) {
		errors.haikuLine2 = 'Must be 7 syllables'
	}	
	
	if(!values.haikuLine3) {
		errors.haikuLine3 = 'Required'
	} else if (values.haikuLine3.length < 5) {
		errors.haikuLine3 = 'Must be 5 syllables'
	}	
	
	if(!values.haikuTheme) {
		errors.haikuTheme = 'Required'
	}
	return errors;
}


const mapDispatchToProps = (dispatch) => ({
	closeModal: () => {
		dispatch(closeModal())
	}
});

export const SubmitFormContainer = connect(
	null, 
	mapDispatchToProps) 
	(reduxForm({
	form: 'submitHaiku',  //a unique name for this form
	fields: ['haikuLine1', 'haikuLine2', 'haikuLine3', 'haikuTheme'], // all the fields in the form
	validate //add validation
})(SubmitForm));