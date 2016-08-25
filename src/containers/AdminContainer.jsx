import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Admin } from '../components/Admin';


const mapStateToProps = (state) => ({
	haikusList: state.haikus.get('haikusList')
});

export const AdminContainer = connect(mapStateToProps)(Admin);