import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS, List, Map} from 'immutable';
import makeStore from './store';
import {Provider} from 'react-redux';
import {setHaikus} from './action_creators';


import {HaikuAppContainer} from './components/HaikuApp';

/*
import {startServer} from './src/server';
*/

export const store = makeStore();

store.dispatch(setHaikus([{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"},
	{id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}, 
	{id: 3, haikuLine1: "waves crashing on rock", haikuLine2: "not the best haiku writer", haikuLine3: "but it is still fun", haikuTheme: "beachTheme"}, 
	{id: 4, haikuLine1: "hbo at 6", haikuLine2: "cannot wait for game of thrones", haikuLine3: "winter is coming", haikuTheme: "stormTheme"}]));

/*
startServer(store);
*/

require("./stylesheets/style.css");
	
ReactDOM.render(
	<Provider store={store}>
		<HaikuAppContainer />
	</Provider>,
	document.getElementById('app')
);
