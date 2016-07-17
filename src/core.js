import {fromJS, List, Map} from 'immutable';

export const INITIAL_STATE = Map();

var shuffle = function (array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	//While there remain elements to shuffle
	while (0 !== currentIndex) {
		//Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -=1;
		//And swap it with the current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

export function setHaikus(state, haikus) {
	
	//Add randomizer for haikus array
	var haikusRandom = shuffle(haikus);
	
	return state.set('haikus', fromJS(haikusRandom))
							.set('currentId', 0);
}

export function next(state) {
	
	var totalHaikus = state.get('haikus').size - 1;
	
	if (state.get('currentId') < totalHaikus){
		return state.updateIn(
		['currentId'],
		0,  //in case currentId is undefined
		currentId => currentId + 1
		);
	} 
		return state.updateIn(
		['currentId'],
		0,  //in case currentId is undefined
		currentId => 0
	);
	
};
