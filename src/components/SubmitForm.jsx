import React from 'react';
import {reduxForm} from 'redux-form';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from 'react-bootstrap';


export class SubmitForm extend React.Component {
	render() {
		const {fields: {haikuLine1, haikuLine2, haikuLine3, haikuTheme}, handleSubmit} = this.props;
		return <form  name="createHaikuForm" onSubmit={handleSubmit}>

				<Modal.Body className="modal-body">
			
					<input type="text" placeholder="Haiku Line 1:  5 Syllables" {...haikuLine1} />
					
					<input type="text" placeholder="Haiku Line 2:  7 Syllables" {...haikuLine2} />
					
					<input type="text" placeholder="Haiku Line 3:  5 Syllables"  {...haikuLine3} />
					
					<FormGroup className="form-group" controlId="formControlsSelect">
						<ControlLabel for="haikuTheme">HAIKU BACKGROUND THEME:</ControlLabel>
						<FormControl className="form-control" componentClass="select" placeholder="select" {...haikuTheme}>
							<option value="select">Please Choose...</option>
							<option value="beachTheme">Beach</option>
							<option value="careerTheme">Career</option>
							<option value="catTheme">Cat</option>
							<option value="cheersTheme">Cheers</option>
							<option value="childhoodTheme">Childhood</option>
							<option value="coffeeTheme">Coffee</option>
							<option value="dogTheme">Dog</option>
							<option value="fantasyTheme">Fantasy</option>
							<option value="fitnessTheme">Fitness</option>
							<option value="foodTheme">Food</option>
							<option value="happyTheme">Happy</option>
							<option value="musicTheme">Music</option>
							<option value="natureTheme">Nature</option>
							<option value="painTheme">Pain</option>
							<option value="romanceTheme">Romance</option>
							<option value="somberTheme">Somber</option>
							<option value="stormTheme">Storm</option>
							<option value="technologyTheme">Technology</option>
							<option value="travelTheme">Travel</option>
							<option value="whimsyTheme">Whimsy</option>
						</FormControl>
					</FormGroup>

				</Modal.Body>
				<Modal.Footer className="modal-footer">
					<Button  className="btn btn-default" >CLOSE</Button>
					<Button className="btn btn-primary">SUBMIT HAIKU</Button>
				</Modal.Footer>
			</form>	
		
		
	}
	
}
export SubmitForm = reduxForm({
	form: 'submit',  //a unique name for this form
	fields: ['haikuLine1', 'haikuLine2', 'haikuLine3', 'haikuTheme'] // all the fields in the form
})(SubmitForm);

export default SubmitForm;












/*
export default class Haiku extends React.Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return <main>
			<h1 className = "mainHaiku">{this.props.haikuLine1}</h1>	
			<h1 className = "mainHaiku">{this.props.haikuLine2}</h1>	
			<h1 className = "mainHaiku">{this.props.haikuLine3}</h1>
		</main>
		
	}
};

function mapStateToProps(state) {
	return {
		haikuLine1: state.getIn(['haikus',state.get('currentId'),'haikuLine1']),
		haikuLine2: state.getIn(['haikus',state.get('currentId'),'haikuLine2']),
		haikuLine3: state.getIn(['haikus',state.get('currentId'),'haikuLine3'])
	};
}

export const HaikuContainer = connect(mapStateToProps)(Haiku);
*/