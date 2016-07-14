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
	
	//I couldn't get the JS className to be added to the string className (it kept turning the JS into a string before it actually got the value), so I made this function to combine the two.  Would like to know if there is a better way?
	getCombinedClasses() {
		return this.props.haikus.get(this.props.currentId).get('haikuTheme') + " haikuApp themes";
	}	
	
	render() {
		return <div className={this.getCombinedClasses()}>
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
