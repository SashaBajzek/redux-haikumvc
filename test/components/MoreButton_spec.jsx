import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import {MoreButton} from '../../src/components/MoreButton';
import {expect} from 'chai';

//This is overkill on the testing

describe('MoreButton', () => {
	
	it('renders a button', () => {
		const component = renderIntoDocument(
			<MoreButton />
		);
		const button = scryRenderedDOMComponentsWithTag(component, 'button');
		
		expect(button.length).to.equal(1);
		expect(button[0].textContent).to.equal('MORE HAIKUS');
	});
	
	
	it('invokes a callback when the button is clicked', () => {
		var currentId = 0;
		
		//Define a mock next function
		
		const next = () => currentId = 1;
		const component = renderIntoDocument(
      <MoreButton next={next}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    // We verify that the next function has been called
    expect(currentId).to.equal(1);
	});
	
	
});