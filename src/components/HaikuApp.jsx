import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map} from 'immutable';
import Haiku from './Haiku';
import MoreButton from './MoreButton';
import SubmitButton from './SubmitButton';

export default class HaikuApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return <div className={this.props.haikus.get(this.props.currentId).get('haikuTheme') + " haikuApp themes"}>
			<header>
				<h2 className="brand">HAIKU FOR YOU</h2>		
				<SubmitButton />
			</header>	

			<Haiku haikus = {this.props.haikus} currentId = {this.props.currentId} />

			<footer>
				<MoreButton />
			</footer>

		</div>
	}
	
};
