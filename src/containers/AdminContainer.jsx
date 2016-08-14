import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Admin } from '../components/Admin';


function mapStateToProps(state) {
	return {
		haikusList: state.haikus.get('haikusList')
	};
}

export const AdminContainer = connect(mapStateToProps)(Admin);