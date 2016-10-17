// Ingredient
import React from 'react';

class Ingredient extends React.Component {
  render() {
    return(
        // Ingredient List
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title"><strong>Ingredients</strong></h2>
          </div>
          <div className="panel-body">
            <div id="ingredients">

              <div>
                Ingredient List Goes Here
              </div>

            </div>
            
          </div>
        </div>
    )
  }
}

module.exports = Ingredient;