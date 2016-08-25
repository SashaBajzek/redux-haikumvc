import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class Haiku extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <main>
			<h1 className="mainHaiku">{this.props.haikuLine1}</h1>	
			<h1 className="mainHaiku">{this.props.haikuLine2}</h1>	
			<h1 className="mainHaiku">{this.props.haikuLine3}</h1>
		</main>
	}
};