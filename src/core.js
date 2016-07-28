import {fromJS, List, Map} from 'immutable';

//Main Functions

export function setHaikus(state, haikusList) {
	//Move randomizer out of reducer and into the action, reducer should be pure
	
	return state.set('haikusList', fromJS(haikusList))
		.set('currentId', 0);
}

export function next(state) {
	
	var totalHaikus = state.get('haikusList').size - 1;
	
	if (state.get('currentId') < totalHaikus){
		return state.updateIn(
		['currentId'],
		0,  //in case currentId is undefined
		currentId => currentId + 1
		);
	} else {
		return state.updateIn(
		['currentId'],
		0,  //in case currentId is undefined
		currentId => 0
		);
	}
	
	return state;
};


//Modal Functions

export function setModal(state) {	
	return state.set('showModal', false);
}

export function openModal(state) {
	return state.updateIn(
		['showModal'],
		showModal => true
		);
};

export function closeModal(state) {
	return state.updateIn(
		['showModal'],
		showModal => false
		);
};



//Admin Functions
/*
function findHaikuIndex(state, haikuId) {
	return state.get('haikus').findIndex(
		(haiku) => haiku.get('id') === haikuId
	);
}

*/