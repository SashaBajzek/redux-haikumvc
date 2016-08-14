import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { openModal } from '../action_creators';
import { SubmitButton } from '../components/SubmitButton';

const dispatchProps = { openModal };

export const SubmitButtonContainer = connect(
	null, 
	dispatchProps
)(SubmitButton);