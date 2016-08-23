import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Button, ControlLabel, FormControl, FormGroup, Modal, show, onHide, keyboard, enforceFocus, bsClass, dialogComponentClass, dialogClassName, closeButton } from 'react-bootstrap';
import { closeModal, addHaiku } from '../action_creators';
import { SubmitHaikuModal } from '../components/SubmitHaikuModal';
import { initialize } from 'redux-form';


const handleSubmit = function(data) {
	console.log('Submission received!', data);
		this.props.addHaiku(data);  //calls addHaiku action
		this.props.closeModal();
};

function mapStateToProps(state) {
	return {
		showModal: state.modal.getIn(['showModal'])
	};
}

const mapDispatchToProps = (dispatch) => ({
	closeModal: () => {
		dispatch(closeModal())
	},
	mySubmitHandler: (data) => {
		console.log('Submission received!', data);
		dispatch(addHaiku(data));  //calls addHaiku action
		dispatch(closeModal());
	}
});

export const SubmitHaikuModalContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitHaikuModal);