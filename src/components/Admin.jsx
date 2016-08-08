import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { List, Map, toJS } from 'immutable';
import { AdminHaiku } from './AdminHaiku';
import * as actionCreators from '../action_creators';

export class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	
	render() {
		return <div>
			<ul className="adminPage">
				{this.props.haikusList.toJS().map(haiku =>
					<AdminHaiku {...this.props}
											key={haiku.id}
											haikuLine1={haiku.haikuLine1}
											haikuLine2={haiku.haikuLine2}
											haikuLine3={haiku.haikuLine3}
											id={haiku.id}/>	
				)}
			</ul>
			
		</div>		
	}
};

function mapStateToProps(state) {
	return {
		haikusList: state.haikus.get('haikusList')
	};
}

export const AdminContainer = connect(mapStateToProps, actionCreators)(Admin);