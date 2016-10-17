// Ingredient
import React from 'react';

              // Code from SPOONACULAR
                // <textarea onfocus="showTooltip('#ingredientArea', 2);" 
                //     id="ingredientArea" 
                //     name="ingredients" 
                //     cols="30" rows="8" 
                //     style="height:260px"
                //     placeholder="One ingredient per line, e.g. '3 oz salmon fillet'">                  
                // </textarea>
 
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
                <textarea onfocus="showTooltip('#ingredientArea', 2);" 
                    id="ingredientArea" 
                    name="ingredients" 
                    cols="30" rows="8" 
                    style={{height:'260px', width: '70%'}}
                    placeholder="One ingredient per line, e.g. '3 oz salmon fillet'">                  
                </textarea>
              </div>

            </div>
            
          </div>
        </div>
    )
  }
}

module.exports = Ingredient;