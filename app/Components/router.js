import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import PantryForm from './Pantry/PantryForm.js';
import RecipeMain from './Recipe/RecipeMain.js';
import LandingPage from './landing_page/landing_page.js';
import About from './about/about.js';
import SignupForm from './Signup/SignupForm.js';
import LoginForm from './Signup/LoginForm.js';

const Routes = (
	<Router history={browserHistory}>

		<Route path="/" component={LandingPage} />
		<Route path="/pantry" component={PantryForm} />
		<Route path="/findrecipe" component={RecipeMain} />
		<Route path="/landing" component={LandingPage} />
		<Route path="/about" component={About} />
		<Route path="/signup" component={SignupForm} />
		<Route path="/login" component={LoginForm} />

		
	{/*<Route path="/addrecipe" component={PantryForm} />*/}
	</Router>
);

export default Routes;