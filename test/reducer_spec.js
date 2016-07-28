import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {reducerHaikus, reducerModal} from '../src/reducer';

describe('reducer', () => {
	
	it('handles SET_HAIKUS', () => {
		const initialState = Map();
		const action = {type: 'SET_HAIKUS', haikusList: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}]};
		const nextState = reducerHaikus(initialState, action);
		
		expect(nextState).to.equal(fromJS({
			haikusList: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
	});
	
	it('handles NEXT', () => {
		const initialState = Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
		const action = {type: 'NEXT'};
		const nextState = reducerHaikus(initialState, action);
		
		expect(nextState).to.equal(Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 1
			}));
	});
	
	it('has an initial state', () => {
		const action = {type: 'SET_HAIKUS', haikusList: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}]};
		const nextState = reducerHaikus(undefined, action);
		
		expect(nextState).to.equal(fromJS({
			haikusList: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
	});
	
});

