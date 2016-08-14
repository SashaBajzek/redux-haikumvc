import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Button, ControlLabel, FormControl, FormGroup, Modal, show, onHide, keyboard, enforceFocus, bsClass, dialogComponentClass, dialogClassName, closeButton } from 'react-bootstrap';
import { closeModal, addHaiku } from '../action_creators';
import { SubmitHaikuModal } from '../components/SubmitHaikuModal';
import { initialize } from 'redux-form';



function mapStateToProps(state) {
	return {
		showModal: state.modal.getIn(['showModal'])
	};
}

const dispatchProps = { closeModal, addHaiku };

export const SubmitHaikuModalContainer = connect(mapStateToProps, dispatchProps)(SubmitHaikuModal);