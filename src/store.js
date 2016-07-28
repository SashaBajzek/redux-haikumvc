import {combineReducers, compose, createStore} from 'redux';
import {reducerHaikus, reducerModal} from './reducer';
import {reducer as formReducer} from 'redux-form';

export default function makeStore() {
	//Using Redux dev tools instead of:
	//return createStore(reducer);
	const createStoreDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
	
	/*
	const reducers = {
		reducer,
		form: formReducer // Mounted at 'form'
	}
	*/
	
	/*
	const reducers = {
		...reducer,
		form: formReducer // Mounted at 'form'
	}
	*/
	
	/*
	const reducers = Object.assign({}, reducer, { form: formReducer });
	*/
	
	/*
	const reducers = { haikus: reducer.haikus, form: formReducer };
	*/
	
	const reducers = {
		haikus: reducerHaikus,
		modal: reducerModal,
		form: formReducer
	}
	
	const reducersCombined = combineReducers(reducers);
	
	//return createStoreDevTools(reducer);
	return createStoreDevTools(reducersCombined);
}
