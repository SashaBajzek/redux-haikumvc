import {fromJS, List, Map} from 'immutable';
import {expect} from 'chai';

import {setHaikus, next, addHaiku, setModal, openModal, closeModal, deleteHaiku} from '../src/core';

describe('application logic', () => {
	
	//Main Haiku Display Functions
	
	describe('setHaikus', () => {
		
		it('adds the haikus to the state & sets currentId to zero', () => {
			const state = Map();
			const haikus = fromJS([{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}, 
			{id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}]);
			const nextState = setHaikus(state, haikus);
			expect(nextState).to.equal(Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			}));
		});
		
		it('converts to immutable', () => {
			const state = Map();
			const haikus = [{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}, 
			{id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}];
			const nextState = setHaikus(state, haikus);
			expect(nextState).to.equal(Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			}));
		});
		
	});
	
	describe('next', () => {
		
		it('increments currentId', () => {
			const state = Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
			const nextState = next(state);
			expect(nextState).to.equal(Map({
				haikusList: List.of(
					Map({id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 1
			}));
		});
		
	});
	
	describe('addHaiku', () => {
		
		it('adds the new haiku at the current index, increments currentId, and gives the haiku the next largest id', () => {
			const state = Map({
				haikusList: List.of(
					Map({id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
					Map({id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
					),
				currentId: 0
			});
			
			const haiku = {haikuLine1: "waves crashing on rock", haikuLine2: "not the best haiku writer", haikuLine3: "but it is still fun", haikuTheme: "beachTheme"};
			 
			const nextState = addHaiku(state, haiku);
			
			expect(nextState).to.equal(fromJS({
			haikusList: [{id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"},{id: 2, haikuLine1: "waves crashing on rock", haikuLine2: "not the best haiku writer", haikuLine3: "but it is still fun", haikuTheme: "beachTheme"},{id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}],
			currentId: 1
			})); 
		});
	});

	
	//Add Haiku Modal Functions
	
	describe('setModal', () => {
		it('adds modal to the state & sets showModal to false', () => {
			const state = Map();
			const nextState = setModal(state);
			expect(nextState).to.equal(Map({
				showModal: false
			}));	
		});	
	});
	
	describe('openModal', () => {
		it('sets showModal to true', () => {
			const state = Map({
				showModal: false
			});
			const nextState = openModal(state);
			expect(nextState).to.equal(Map({
				showModal: true
			}));	
		});	
	});
	
	describe('closeModal', () => {
		it('sets showModal to false', () => {
			const state = Map({
				showModal: true
			});
			const nextState = closeModal(state);
			expect(nextState).to.equal(Map({
				showModal: false
			}));	
		});	
	});
	
	//Admin Functions
	
	describe('deleteHaiku', () => {
		it('deletes a haiku based on the id', () => {
			
		const state = Map({
			haikusList: List.of(
				Map({id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}),	
				Map({id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"})
				),
			currentId: 0
		});
		const haikuId = 1;
		const nextState = deleteHaiku(state, haikuId);
		
		expect(nextState).to.equal(fromJS({
			haikusList: [{id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"}],
			currentId: 0
		}));
			
		});
	});
	

});