import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import openModal from '../action_creators';

export class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <button className="submit"
						 onClick = {this.props.openModal}>
			SUBMIT A HAIKU
			</button>		
	}
};

export const SubmitButtonContainer = connect(openModal)(SubmitButton);