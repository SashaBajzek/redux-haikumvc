import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import {AdminHaiku} from '../../src/components/AdminHaiku';
import {expect} from 'chai';

//This is overkill on the testing

describe('AdminHaiku', () => {
	
	it('renders three haiku lines', () => {
		const component = renderIntoDocument(
			<AdminHaiku />
		);
		const haikuLines = scryRenderedDOMComponentsWithTag(component, 'p');
		expect(haikuLines.length).to.equal(3);
	});
	
	it('renders a delete button', () => {
		const component = renderIntoDocument(
			<AdminHaiku />
		);
		const button = scryRenderedDOMComponentsWithTag(component, 'button');
		
		expect(button.length).to.equal(1);
		expect(button[0].textContent).to.equal('Delete this Haiku');
	});
	
	
	it('invokes a callback when the delete button is clicked', () => {
		var deleted = false;
		
		//Define a mock delete function
		
		const deleteHaiku = () => deleted = true;
		const component = renderIntoDocument(
      <AdminHaiku deleteHaiku={deleteHaiku}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    // We verify that the deleteHaiku function has been called
    expect(deleted).to.equal(true);
	});
	
	
});