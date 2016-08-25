import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { HaikuApp } from '../components/HaikuApp';

const mapStateToProps = (state) => ({
	haikuTheme: state.haikus.getIn(['haikusList', state.haikus.getIn(['currentId']), 'haikuTheme'])
});

export const HaikuAppContainer = connect(mapStateToProps)(HaikuApp);