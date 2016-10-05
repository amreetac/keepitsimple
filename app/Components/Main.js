import React from 'react';

// Import sub-components
import Form from './Children/Form';
import Results from './Children/Results';


// Helper Function
import helpers from './utils/helpers.js';

class Main extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			searchTerm: "",
			results: ""
		}

		this.setTerm = this.setTerm.bind(this);
	}

	setTerm(term){
		this.setState({
			searchTerm: term
		})
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			helpers.runQuery(this.state.searchTerm)
				.then((data)=>{
					if (data != this.state.results)
					{
						console.log("HERE");
						console.log(data);

						this.setState({
							results: data
						})		
					}

				// This code is necessary to bind the keyword "this" when we say this.setState 
				// to actually mean the component itself and not the runQuery function.
				})		
		}
	}

	render(){
		return(
		<div>
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
					<Form setTerm={this.setTerm}/>
				</div>
				<div className="row">
					<Results address={this.state.results} />
				</div>
			</div>
			<br />
			<footer>
				<div className="row">
					Copyright 2016 
				</div>
			</footer>
		</div>
		)		
	}

}

// Export the componen back for use in other files
export default Main;