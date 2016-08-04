import {fromJS, List, Map} from 'immutable';

//Main Haiku Display Functions

export function setHaikus(state, haikusList) {
	//Moved randomizer out of reducer and into the action so reducer is pure
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

export function addHaiku(state, haiku) {
	const haikuId = state.get('haikusList').size;
	const newHaiku = Map({id: haikuId, haikuLine1: haiku.haikuLine1, haikuLine2: haiku.haikuLine2, haikuLine3: haiku.haikuLine3, haikuTheme: haiku.haikuTheme});
	return state.update('haikusList', (haikusList) => haikusList.push(newHaiku));
}


//Add Haiku Modal Functions

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