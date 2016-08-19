import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {reducerHaikus, reducerModal} from '../src/reducer';

describe('reducerHaikus', () => {
	
	it('has an initial state', () => {
		const action = {type: 'SET_HAIKUS', haikusList: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}]};
		const nextState = reducerHaikus(undefined, action);
		
		expect(nextState).to.equal(fromJS({
			haikusList: [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
	});
	
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
		const state = Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
		const action = {type: 'NEXT'};
		const nextState = reducerHaikus(state, action);
		
		expect(nextState).to.equal(Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 1
			}));
	});
	
	it('handles ADD_HAIKU', () => {
		const state = Map({
				haikusList: List.of(
					Map({id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
		const action = {type: 'ADD_HAIKU', haiku: {haikuLine1: "waves crashing on rock", haikuLine2: "not the best haiku writer", haikuLine3: "but it is still fun", haikuTheme: "beachTheme"}};
		const nextState = reducerHaikus(state, action);
		
		expect(nextState).to.equal(fromJS({
			haikusList: [{id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"},{id: 2, haikuLine1: "waves crashing on rock", haikuLine2: "not the best haiku writer", haikuLine3: "but it is still fun", haikuTheme: "beachTheme"},{id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}],
			currentId: 1
		}));
	});
	
	it('handles DELETE_HAIKU', () => {
		const state = Map({
				haikusList: List.of(
					Map({id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
		const action = {type: 'DELETE_HAIKU', haikuId: 1};
		const nextState = reducerHaikus(state, action);
		
		expect(nextState).to.equal(fromJS({
			haikusList: [{id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
	});
	
});


describe('reducerModal', () => {
	it('has an initial state', () => {
		const action = {type: 'SET_MODAL'};
		const nextState = reducerModal(undefined, action);
		
		expect(nextState).to.equal(fromJS({
			showModal: false
		}));
	});
	
	it('handles SET_MODAL', () => {
		const initialState = Map();
		const action = {type: 'SET_MODAL'};
		const nextState = reducerModal(initialState, action);
		
		expect(nextState).to.equal(fromJS({
			showModal: false
		}));
	});
	
	it('handles OPEN_MODAL', () => {
		const state = Map({
			showModal: false
		});
		const action = {type: 'OPEN_MODAL'};
		const nextState = reducerModal(state, action);
		
		expect(nextState).to.equal(Map({
			showModal: true
		}));	
	});
	
	it('handles CLOSE_MODAL', () => {
		const state = Map({
			showModal: true
		});
		const action = {type: 'CLOSE_MODAL'};
		const nextState = reducerModal(state, action);
		
		expect(nextState).to.equal(Map({
			showModal: false
		}));	
	});
	
	
});

