import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import { HaikuContainer } from './Haiku';
import { MoreButtonContainer } from './MoreButton';
import { SubmitButtonContainer } from './SubmitButton';
import { SubmitHaikuModalContainer } from './SubmitHaikuModal';
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
				<SubmitButtonContainer {...this.props}/>
			</header>	
			<HaikuContainer />
			<footer>
				<MoreButtonContainer {...this.props}/>
			</footer>
			<SubmitHaikuModalContainer {...this.props}/>
		</div>
	}
};

function mapStateToProps(state) {
	return {
		haikuTheme: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuTheme'])
	};
}

export const HaikuAppContainer = connect(mapStateToProps, actionCreators)(HaikuApp);