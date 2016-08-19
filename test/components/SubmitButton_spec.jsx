import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import {SubmitButton} from '../../src/components/SubmitButton';
import {expect} from 'chai';

describe('SubmitButton', () => {
	
	it('renders a button', () => {
		const component = renderIntoDocument(
			<SubmitButton />
		);
		const button = scryRenderedDOMComponentsWithTag(component, 'button');
		
		expect(button.length).to.equal(1);
		expect(button[0].textContent).to.equal('SUBMIT A HAIKU');
	});
	
	
	it('invokes a callback when the button is clicked', () => {
		var showModal = false;
		
		//Define a mock openModal function
		
		const openModal = () => showModal = true;
		const component = renderIntoDocument(
      <SubmitButton openModal={openModal}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    // We verify that the next function has been called
    expect(showModal).to.equal(true);
	});
	
	
});