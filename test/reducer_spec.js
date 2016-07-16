import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
	
	it('handles SET_HAIKUS', () => {
		const initialState = Map();
		const action = {type: 'SET_HAIKUS', haikus: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}]};
		const nextState = reducer(initialState, action);
		
		expect(nextState).to.equal(fromJS({
			haikus: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
	});
	
	it('handles NEXT', () => {
		const initialState = Map({
				haikus: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
		const action = {type: 'NEXT'};
		const nextState = reducer(initialState, action);
		
		expect(nextState).to.equal(Map({
				haikus: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 1
			}));
	});
	
	it('has an initial state', () => {
		const action = {type: 'SET_HAIKUS', haikus: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}]};
		const nextState = reducer(undefined, action);
		
		expect(nextState).to.equal(fromJS({
			haikus: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
	});
	
});

