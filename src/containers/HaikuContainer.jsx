import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Haiku } from '../components/Haiku';

function mapStateToProps(state) {
	return {
		haikuLine1: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuLine1']),
		haikuLine2: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuLine2']),
		haikuLine3: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuLine3'])
	};
}

export const HaikuContainer = connect(mapStateToProps)(Haiku);