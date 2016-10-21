import React, { Component } from 'react';
import '../style/App.sass';

// page for creating recipe:
// const createRecipe

// Default page, showing all recipes:
class RecipeShow extends Component {
  
  render() {
    return (
      <div className="card card-block">
        <img className='card-block' src='http://lorempixel.com/300/180/food' alt='fooditem' />
        <div className='card-block'>
          <h3 className='card-title'>Title</h3>
          <p className='card-text'>lorem</p>
          <h6>Categories: These are the cats</h6>
          <button className='btn btn-danger'>Delete</button>
        </div>
      </div>
    );
  }
}

var App = React.createClass({
  render() {
    return (
      <div>
        <RecipeShow />
      </div>
    );
  }
});

export default App;
// <img className='card-block' src='...' alt='fooditem' />