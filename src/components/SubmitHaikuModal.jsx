import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Button, ControlLabel, FormControl, FormGroup, Modal, show, onHide, keyboard, enforceFocus, bsClass, dialogComponentClass, dialogClassName, closeButton} from 'react-bootstrap';
import closeModal from '../action_creators';
import {SubmitFormContainer} from './SubmitForm';
import { initialize } from 'redux-form';

export class SubmitHaikuModal extends React.Component {
	
	handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('submitHaiku', {})); // clear form
  }
	
	render() {
		return   <div>
			<Modal show={this.props.showModal} onHide={this.props.closeModal}>
 
				<Modal.Header className="modal-header">
						<button type="button" className="close" onClick = {this.props.closeModal}><span >&times;</span></button>
						<Modal.Title className="modal-title">CREATE A HAIKU</Modal.Title>
				</Modal.Header>
				
				<SubmitFormContainer onSubmit={this.handleSubmit} {...this.props}/>
				
			</Modal>
		</div>
	}
};

function mapStateToProps(state) {
	return {
		showModal: state.modal.getIn(['showModal'])
	};
}

export const SubmitHaikuModalContainer = connect(mapStateToProps)(SubmitHaikuModal);