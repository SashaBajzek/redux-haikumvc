import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { closeModal, addHaiku } from '../action_creators';
import { SubmitHaikuModal } from '../components/SubmitHaikuModal';

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