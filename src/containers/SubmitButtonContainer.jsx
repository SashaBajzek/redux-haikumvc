import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../action_creators';
import { SubmitButton } from '../components/SubmitButton';

const dispatchProps = { openModal };

export const SubmitButtonContainer = connect(
	null, 
	dispatchProps
)(SubmitButton);