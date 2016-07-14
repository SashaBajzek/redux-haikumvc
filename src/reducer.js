import (setHaikus, next, INITIAL_STATE) from './core';

export default function reducer(state = INITIAL_STATE, action) {
	//Figure out which function to call and call it
	switch (action.type) {
		case 'SET_HAIKUS':
			return setHaikus(state, action.haikus);
		case 'NEXT':
			return next(state);
	}
	return state;
}