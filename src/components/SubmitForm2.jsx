import React from 'react';
import {reduxForm} from 'redux-form';
import {Button, Modal} from 'react-bootstrap';


export class SubmitForm2 extend React.Component {
	render() {
		
		return <form >

				

			</form>	
		
		
	}
	
}
export SubmitForm2 = reduxForm({
	form: 'submit'  //a unique name for this form

})(SubmitForm2);

export default SubmitForm2;


