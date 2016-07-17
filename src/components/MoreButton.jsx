import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import next from '../action_creators';

export class MoreButton extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <button className = "more"
						 			onClick = {this.props.next} >
			MORE HAIKUS
		</button>
	}
};

export const MoreButtonContainer = connect(next)(MoreButton);