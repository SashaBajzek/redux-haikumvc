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
		haikuList: state.haikus.get('haikuList')
	};
}

export const AdminContainer = connect(mapStateToProps)(Admin);

/*
			<div class="adminPage" ng-show="isLoggedIn()">
				<div class="admin" ng-repeat="haiku in haikus"> 
					<p>{{haiku.haikuLine1}},</p>
					<p>{{haiku.haikuLine2}},</p>
					<p>{{haiku.haikuLine3}}</p>
					<button class="btn btn-danger" ng-click="deleteHaiku(haiku)">Delete this Haiku</button>
				</div>
			</div>
			<div ng-hide="isLoggedIn()">
				<h3>You need to <a href="/#/login">Log In</a> before you can delete a haiku</h3>
			</div>
*/