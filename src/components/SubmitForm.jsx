import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';

//Validation for the form fields
const validate = values => {
	const errors = {};
	
	if(!values.haikuLine1) {
		errors.haikuLine1 = 'Required'
	} else if (values.haikuLine1.length < 5) {
		errors.haikuLine1 = 'Must be 5 syllables'
	}
	
	if(!values.haikuLine2) {
		errors.haikuLine2 = 'Required'
	} else if (values.haikuLine2.length < 7) {
		errors.haikuLine2 = 'Must be 7 syllables'
	}	
	
	if(!values.haikuLine3) {
		errors.haikuLine3 = 'Required'
	} else if (values.haikuLine3.length < 5) {
		errors.haikuLine3 = 'Must be 5 syllables'
	}	
	
	if(!values.haikuTheme) {
		errors.haikuTheme = 'Required'
	}
	return errors;
}


export class SubmitForm extends React.Component {
	render() {
		const {fields: {haikuLine1, haikuLine2, haikuLine3, haikuTheme}, handleSubmit} = this.props;
		
		//Changes the input field's outline-color
		//Blue for first time touched, green valid, red invalid
		const validationClass = (field) => {
			if (field.touched && !field.error) {
				return 'inputValid';
			} else if (field.touched && field.error) {
				return 'inputInvalid';
			}
		}
		
		//Disables the submit button until all fields are valid
		const canSubmit = () => {
			if (haikuLine1.error || haikuLine2.error || haikuLine3.error || haikuTheme.error) {
				return "disabled";
			} else {
				return "";
			}
		}
		
		return <form  name="createHaikuForm" onSubmit={ handleSubmit }>

				<Modal.Body className="modal-body">
			
					<input type="text" placeholder="Haiku Line 1:  5 Syllables" {...haikuLine1} 
					className = {validationClass(haikuLine1)}/>
					
					<input type="text" placeholder="Haiku Line 2:  7 Syllables" {...haikuLine2} className = {validationClass(haikuLine2)} />

					<input type="text" placeholder="Haiku Line 3:  5 Syllables"  {...haikuLine3} className = {validationClass(haikuLine3)} />
					
					<FormGroup className="form-group" controlId="formControlsSelect">
						<ControlLabel for="haikuTheme">HAIKU BACKGROUND THEME:</ControlLabel>
						<FormControl className="form-control" componentClass="select" placeholder="select" {...haikuTheme} className = {validationClass(haikuTheme)}>
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
					<Button  className="btn btn-default" onClick = {this.props.closeModal}>CLOSE</Button>
					<Button className={canSubmit() + " btn btn-primary"} type="submit" >SUBMIT HAIKU</Button>
					
				</Modal.Footer>
			</form>	
	}
}

/*

const dispatchProps = { closeModal };

export const SubmitFormContainer = connect(
	null, 
	dispatchProps) 
	(reduxForm({
	form: 'submitHaiku',  //a unique name for this form
	fields: ['haikuLine1', 'haikuLine2', 'haikuLine3', 'haikuTheme'], // all the fields in the form
	validate //add validation
})(SubmitForm));

*/