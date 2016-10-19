// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Include the Main Component
import RecipeMain from './Components/Recipe/RecipeMain';
import Router from './Components/router';

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	Router,
	document.getElementById('app')
)