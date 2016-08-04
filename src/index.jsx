import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS, List, Map } from 'immutable';
import makeStore from './store';
import { Provider } from 'react-redux';
import { setHaikus, setModal } from './action_creators';
import { Router, Route, Link, browserHistory } from 'react-router';
import { HaikuAppContainer } from './components/HaikuApp';
import { AdminContainer } from './components/Admin';

/*
import {startServer} from './src/server';
*/

export const store = makeStore();

store.dispatch(setHaikus(
	[{id: 0, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"},
	{id: 1, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}, 
	{id: 2, haikuLine1: "waves crashing on rock", haikuLine2: "not the best haiku writer", haikuLine3: "but it is still fun", haikuTheme: "beachTheme"}, 
	{id: 3, haikuLine1: "hbo at 6", haikuLine2: "cannot wait for game of thrones", haikuLine3: "winter is coming", haikuTheme: "stormTheme"}]
));

store.dispatch(setModal());

/*
startServer(store);
*/

require("./stylesheets/style.css");

//Need to add routing for haiku page vs admin page
	
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={HaikuAppContainer} />
			<Route path="/admin" component={AdminContainer} />
		</Router>
	</Provider>,
	document.getElementById('app')
);
