import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import MoreButton from '../../src/components/MoreButton';
import {expect} from 'chai';

describe('MoreButton', () => {
	
	it('renders a button', () => {
		const component = renderIntoDocument(
			<MoreButton />
		);
		const button = scryRenderedDOMComponentsWithTag(component, 'button');
		
		expect(button.length).to.equal(1);
		expect(button[0].textContent).to.equal('MORE HAIKUS');
	});
	
	/*
	it('invokes a callback when the more button is clicked', () => {
		
	});
	
	*/
});