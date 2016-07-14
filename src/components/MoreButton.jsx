import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class MoreButton extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <button className="more">
			MORE HAIKUS
		</button>
		
	}
};