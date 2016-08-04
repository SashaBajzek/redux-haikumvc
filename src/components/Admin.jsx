import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';

export class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	
	render() {
		return <div className="adminPage">
				<div className="admin"> 
					<button className="btn btn-danger">Delete this Haiku</button>
				</div>
			</div>
	}
};

function mapStateToProps(state) {
	return {
		
		
		
	};
}

export const AdminContainer = connect(mapStateToProps)(Admin);

