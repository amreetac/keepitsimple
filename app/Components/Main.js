import React from 'react';

// Import sub-components
import Form from './Children/Form';

import Results from './Children/Results';
import Navbar from './Children/Navbar';
import Footer from './Children/Footer';


// Helper Function
//import helpers from './utils/helpers.js';

class Main extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			searchTerm: "",
			recipes: {}
		}

		this.setTerm = this.setTerm.bind(this);
		this.setResults = this.setResults.bind(this);
	}

	setTerm(term){
		this.setState({
			searchTerm: term
		})
	}

	setResults(results){

		this.setState({
			results: results
		})
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.searchTerm != this.state.searchTerm){
			console.log(" UPDATED ",prevState.searchTerm, this.state.searchTerm );
			console.log('prevProps: ', prevProps);		
		}
	}

	render(){
		
		return(
		<div>
		   <Navbar />
			<header>
				<div className="jumbotron">
					<div className="row">
						<h1 className="mainHeader text-center">Recipe Finder!</h1>
					</div>
				</div>
			</header>	
			<br />
			<div className="container">
				<div className="row">
					<Form setTerm={this.setTerm} setResults={this.setResults}/>
				</div>
			</div>
			<Footer />
		</div>
		)		
	}

}

// Export the componen back for use in other files
export default Main;