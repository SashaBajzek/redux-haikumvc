import {fromJS, List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function setHaikus(state, haikus) {
	return state.set('haikus', fromJS(haikus))
							.set('currentId', 0);
}

export function next(state) {
	return state.updateIn(
		['currentId'],
		0,
		currentId => currentId + 1;
	);
};