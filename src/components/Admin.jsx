import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { toJS } from 'immutable';
import { AdminHaikuContainer } from '../containers/AdminHaikuContainer';

export class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	
	render() {
		return <div>
			<ul className="adminPage">
				{this.props.haikusList.toJS().map(haiku =>
					<AdminHaikuContainer 
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