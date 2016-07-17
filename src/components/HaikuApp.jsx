import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map} from 'immutable';
import {HaikuContainer} from './Haiku';
import MoreButton from './MoreButton';
import SubmitButton from './SubmitButton';
import {connect} from 'react-redux';

export class HaikuApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	/*{this.props.haikus.get(this.props.currentId).get('haikuTheme') + " haikuApp themes"}*/
	
	render() {
		return <div className={this.props.haikuTheme + " haikuApp themes"}>
			<header>
				<h2 className="brand">HAIKU FOR YOU</h2>		
				<SubmitButton />
			</header>	

			<HaikuContainer />

			<footer>
				<MoreButton />
			</footer>

		</div>
	}
	
};

function mapStateToProps(state) {
	return {
		haikus: state.get('haikus'),
		currentId: state.get('currentId'),
		haikuTheme: state.getIn(['haikus',state.get('currentId'),'haikuTheme'])
	};
}

export const HaikuAppContainer = connect(mapStateToProps)(HaikuApp);