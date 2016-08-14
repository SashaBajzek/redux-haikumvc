import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { deleteHaiku } from '../action_creators';

export class AdminHaiku extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <li className="admin">
			<p>{this.props.haikuLine1}</p>
			<p>{this.props.haikuLine2}</p>
			<p>{this.props.haikuLine3}</p>
			<button className="btn btn-danger" onClick={() => this.props.deleteHaiku(this.props.id)}>Delete this Haiku</button>
		</li>
	}
};

/*

const dispatchProps = { deleteHaiku };

export const AdminHaikuContainer = connect(
	null,
	dispatchProps
)(AdminHaiku);

*/