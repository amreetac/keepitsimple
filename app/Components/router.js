import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import PantryForm from './Pantry/PantryForm.js';
import RecipeMain from './Recipe/RecipeMain.js';

const Routes = (
	<Router history={browserHistory}>

		<Route path="/" component={Main} />
		<Route path="/pantry" component={PantryForm} />
		<Route path="/findrecipe" component={RecipeMain} />

	{/*<Route path="/addrecipe" component={PantryForm} />*/}
	</Router>
);

export default Routes;