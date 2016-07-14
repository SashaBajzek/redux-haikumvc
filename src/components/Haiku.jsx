import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Haiku extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <main>
			<h1 className = "mainHaiku">{this.props.haikus.get(this.props.currentId).get('haikuLine1')}</h1>	
			<h1 className = "mainHaiku">{this.props.haikus.get(this.props.currentId).get('haikuLine2')}</h1>	
			<h1 className = "mainHaiku">{this.props.haikus.get(this.props.currentId).get('haikuLine3')}</h1>
		</main>
		
	}
};