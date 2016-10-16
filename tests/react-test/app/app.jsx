// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Include the Main Component
import RecipeCard from './components/recipe_card/recipe_card.jsx';

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<RecipeCard />,
	document.getElementById('app')
)