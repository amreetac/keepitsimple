import React from 'react';
class Results extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Recipes</strong></h2>
				</div>
				<div className="panel-body text-center">

						<h3>List</h3>
						<p>{this.props.address}</p>

				</div>
			</div>

		)		
	}
}

// Export the component back for use in other files
export default Results;