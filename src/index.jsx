import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS, List, Map} from 'immutable';
import makeStore from './src/store';

import HaikuApp from './components/HaikuApp';

export const store = makeStore();

const haikus = fromJS(
	[{id: 1, haikuLine1: "trying to wake up", haikuLine2: "coffee is my addiction", haikuLine3: "how i love it so", haikuTheme: "coffeeTheme"},
	{id: 2, haikuLine1: "making my first site", haikuLine2: "learning new technologies", haikuLine3: "i hope you like it", haikuTheme: "technologyTheme"}]
);

const currentId = 1;

require("./stylesheets/style.css");
	
ReactDOM.render(
  <HaikuApp haikus={haikus} currentId={currentId}/>,
  document.getElementById('app')
);
