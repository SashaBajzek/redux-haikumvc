import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { deleteHaiku } from '../action_creators';
import { AdminHaiku } from '../components/AdminHaiku';


const dispatchProps = { deleteHaiku };

export const AdminHaikuContainer = connect(
	null,
	dispatchProps
)(AdminHaiku);
