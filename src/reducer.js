import { fromJS, List, Map } from 'immutable';
import { next, setHaikus, setModal, openModal, closeModal, addHaiku, deleteHaiku } from './core';

export function reducerHaikus(state = Map(), action) {
	switch (action.type) {
		case 'SET_HAIKUS':
			return setHaikus(state, action.haikusList);
		case 'NEXT':
			return next(state);
		case 'ADD_HAIKU':
			return addHaiku(state, action.haiku);
		case 'DELETE_HAIKU':
			return deleteHaiku(state, action.haikuId);
	}
	return state;
}

export function reducerModal(state = Map(), action) {
	switch (action.type) {
		case 'SET_MODAL':
			return setModal(state);
		case 'OPEN_MODAL':
			return openModal(state);
		case 'CLOSE_MODAL':
			return closeModal(state);
	}
	return state;
}

