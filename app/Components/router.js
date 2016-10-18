import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import PantryForm from './Pantry/PantryForm.js';

const Routes = (
	<Router history={browserHistory}>

		<Route path="/" component={Main} />
		<Route path="/pantry" component={PantryForm} />
	{/*<Route path="/addrecipe" component={PantryForm} />*/}
	</Router>
);

export default Routes;