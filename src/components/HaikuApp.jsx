import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { HaikuContainer } from '../containers/HaikuContainer';
import { MoreButtonContainer } from '../containers/MoreButtonContainer';
import { SubmitButtonContainer } from '../containers/SubmitButtonContainer';
import { SubmitHaikuModalContainer } from '../containers/SubmitHaikuModalContainer';


export class HaikuApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	
	render() {
		return <div className={this.props.haikuTheme + " haikuApp themes"}>
			<header>
				<h2 className="brand">HAIKU FOR YOU</h2>	
				<SubmitButtonContainer />
			</header>	
			<HaikuContainer />
			<footer>
				<MoreButtonContainer />
			</footer>
			<SubmitHaikuModalContainer />
		</div>
	}
};

/*

function mapStateToProps(state) {
	return {
		haikuTheme: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuTheme'])
	};
}

export const HaikuAppContainer = connect(mapStateToProps)(HaikuApp);

*/