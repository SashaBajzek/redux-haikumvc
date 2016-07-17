import {fromJS, List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function setHaikus(state, haikus) {
	return state.set('haikus', fromJS(haikus))
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
