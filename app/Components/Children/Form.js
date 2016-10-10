import React from 'react';
import axios from 'axios';
class Form extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			term: "",
			results:[]
		}
		


		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	setResults(results){
		this.setState({
			results: results
		})
	}
	handleChange(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}
	getSearchResults(){console.log(this.state.term);

		this.props.setTerm(this.state.term);
		var self = this;
		var currentURL = window.location.origin;
		console.log(currentURL+ "/recipe/" + this.state.term)

		$.get( currentURL + "/recipe/" + this.state.term, function( data ) {

			if(data == false){
				$("#name").text(" No Recipes Found ");
				$("#stats").hide();
			}
			else {
				// $("#stats").show();
				// $("#title").text(data.title);
				// $("#source_url").attr("href", data.source_url);
				// $("#image_url").attr("src", data.image);
				console.log('from handleclicks'+data);
				self.setState({
              		results: self.state.results
            	})
				//return data;
			}
			
		})
	}
	handleClick(){
		console.log("CLICK");
		this.getSearchResults();
		
	}	

	render(){
		//if(data){alert('ggg')};
		return(
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title text-center"><strong>Ingredient</strong></h2>
					</div>
					<div className="panel-body text-center">

							<form>

								<div className="form-group">
									<h4 className="text-center">
										<em>
											Enter an ingredient to search for a recipe (ex: "banana").
										</em>
									</h4>
					
									<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
									<br />
									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
								</div>

							</form>
					</div>
				</div>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title"><strong>Recipe Result</strong></h3>
					</div>
					<div className="panel-body">
						<div className="well">
							<h2 id="title">All Recipes</h2>
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

			</div>

		)
	}
}

export default Form;

