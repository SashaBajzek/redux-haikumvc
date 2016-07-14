import {fromJS, List, Map} from 'immutable';
import {expect} from 'chai';

import {setHaikus} from '../src/core';

describe('application logic', () => {
	
	describe('setHaikus', () => {
		
		it('adds the haikus to the state & sets currentId to zero', () => {
			const state = Map();
			const haikus = fromJS([{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}, 
			{id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}]);
			const(nextState).to.equal(Map({
				haikus: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0;
			}));
		});
		
		it('converts to immutable', () => {
			const state = Map();
			const haikus = [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}, 
			{id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}];
			expect(nextState).to.equal(Map({
				haikus: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0;
			}));
		});
		
	});
	
	describe('next', () => {
		
		it('increments currentId', () => {
			const state = Map({
				haikus: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0;
			});
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				haikus: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 1;
			}));
		});
		
	});
	
	
});