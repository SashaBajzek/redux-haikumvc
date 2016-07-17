import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class MoreButton extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		// The onClick handler will call the nextHaiku function given in the props
		return <button className = "more"
						 		/*	onClick = {() => this.props.nextHaiku()} */>
			MORE HAIKUS
		</button>
		
	}
};