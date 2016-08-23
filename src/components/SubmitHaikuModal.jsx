import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Button, ControlLabel, FormControl, FormGroup, Modal, show, onHide, keyboard, enforceFocus, bsClass, dialogComponentClass, dialogClassName, closeButton } from 'react-bootstrap';
import { SubmitFormContainer } from '../containers/SubmitFormContainer';
import { initialize } from 'redux-form';


export class SubmitHaikuModal extends React.Component {
	
	render() {
		return   <div>
			<Modal show={this.props.showModal} onHide={this.props.closeModal}>
				<Modal.Header className="modal-header">
						<button type="button" className="close" onClick = {this.props.closeModal}><span >&times;</span></button>
						<Modal.Title className="modal-title">CREATE A HAIKU</Modal.Title>
				</Modal.Header>
				<SubmitFormContainer onSubmit={ (this.props.mySubmitHandler.bind(this)) } />
			</Modal>
		</div>
	}
};

/*

SubmitFormContainer onSubmit={this.handleSubmit.bind(this)}


function mapStateToProps(state) {
	return {
		showModal: state.modal.getIn(['showModal'])
	};
}

const dispatchProps = { closeModal, addHaiku };

export const SubmitHaikuModalContainer = connect(mapStateToProps, dispatchProps)(SubmitHaikuModal);

*/