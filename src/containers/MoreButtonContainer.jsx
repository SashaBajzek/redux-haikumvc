import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { next } from '../action_creators';
import { MoreButton } from '../components/MoreButton'

const dispatchProps = { next };

export const MoreButtonContainer = connect(
	null, 
	dispatchProps
)(MoreButton);