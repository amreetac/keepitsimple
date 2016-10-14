import React from 'react';

//import { Input } from 'react-bootstrap';
import Result from './Results';

class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term: "",
			results:[]
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}
	setResults(results){
		this.setState({
			results: results
		})
	}
	getSearchResults(){
		console.log("getSearchResults: ", this.state.term);

		this.props.setTerm(this.state.term);
		var self = this;
		var currentURL = window.location.origin;
		console.log(currentURL+ "/recipe/" + this.state.term)

		$.get( currentURL + "/recipe/" + this.state.term, function( data ) {
			console.log('data', data);
			if(data == false){
				$("#name").text(" No Recipes Found ");
				$("#stats").hide();
			}
			else {
				$("#stats").show();
				self.setState({
              		results: data
            	})
            	console.log('self.state.results', self.state.results);
			}
			
		})
	}
	handleChange(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
		console.log(event);
	}
	handleKeyDown(e) {
		console.log("handleKeyDown: ", this.state.term);
		if (e.key === 'Enter'){
			e.preventDefault()
      		this.getSearchResults();
    	}
  	}
	
	handleClick(){
		console.log("CLICK");
		this.getSearchResults();	
	}	

	render(){
		return(
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center"><strong>Ingredient</strong></h2>
					</div>
					<div className="panel-body text-center">

							<form id="form-recipe">

								<div className="form-group">
									<h4 className="text-center">
										<em>
											Enter an ingredient to search for a recipe (ex: "banana").
										</em>
									</h4>
					
									<input type="text" className="form-control text-center" id="term" 
										onKeyDown={this.handleKeyDown} 
										onChange= {this.handleChange} 
									required/>
									<br />
									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
								</div>

							</form>
					</div>
				</div>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title"><strong>Recipe Result</strong></h2>
					</div>
					<div className="panel-body">
						<div id="stats">

							<ul>
								{this.state.results.map(function(result){
									return(
										<Result key={result.id} article={result} />
									)
								})}
							</ul>

						</div>
						
					</div>
				</div>

			</div>

		)
	}
}

export default Form;