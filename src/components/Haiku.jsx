import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';

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

function mapStateToProps(state) {
	return {
		haikuLine1: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuLine1']),
		haikuLine2: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuLine2']),
		haikuLine3: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuLine3'])
	};
}

export const HaikuContainer = connect(mapStateToProps)(Haiku);