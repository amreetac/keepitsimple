// Ingredient
import React from 'react';

class Instruction extends React.Component {
  render() {
    return(
		// Instruction List
		<div className="panel panel-default">
			<div className="panel-heading">
				<h2 className="panel-title"><strong>Instructions</strong></h2>
			</div>
			<div className="panel-body">
				<div id="instructions">

					<ul>
						Instruction List Goes Here
					</ul>

				</div>
				
			</div>
		</div>
    )
  }
}

module.exports = Instruction;