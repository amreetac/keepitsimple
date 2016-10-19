// Ingredient
import React from 'react';

class PantryIngredient extends React.Component {
  render() {
    return  (
  
        <img
          className="img-responsive recipe-item" 
          src= {this.props.ingredient.foodimg}
          width="200"
        />
    )
  }
 
}

export default PantryIngredient;