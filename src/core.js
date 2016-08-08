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
	//find next haikuId based on max id
	const haikuId = state.reduce((maxId, haikuList, id) => Math.max(id, maxId), 0) + 1;
	const newHaiku = Map({id: haikuId, ...haiku});
	return state
		.updateIn(['currentId'], currentId => currentId + 1)
		.update('haikusList', (haikusList, currentId) => 
		haikusList.splice(state.get('currentId')+1, 0, newHaiku));
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