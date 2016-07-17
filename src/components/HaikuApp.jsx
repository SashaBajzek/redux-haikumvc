import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map} from 'immutable';
import {HaikuContainer} from './Haiku';
import {MoreButtonContainer} from './MoreButton';
import SubmitButton from './SubmitButton';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export class HaikuApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	
	render() {
		return <div className={this.props.haikuTheme + " haikuApp themes"}>
			<header>
				<h2 className="brand">HAIKU FOR YOU</h2>	
				<SubmitButton />
			</header>	

			<HaikuContainer />

			<footer>
				<MoreButtonContainer {...this.props}/>
			</footer>
		</div>
	}
	
};

function mapStateToProps(state) {
	return {
		haikuTheme: state.getIn(['haikus',state.get('currentId'),'haikuTheme'])
	};
}

export const HaikuAppContainer = connect(mapStateToProps, actionCreators)(HaikuApp);