import React, { Component } from 'react';
import '../style/App.sass';

// Datastorage local component
const CardData = () => {
  const storedRecipe = localStorage.getItem('recipesFCC');
  var data;
  if ( storedRecipe ) { 
  data = JSON.parse(storedRecipe); 
  } else {
    data = [
      {
        key: 0,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'https://img.grouponcdn.com/deal/akLMq2jHuyusEMN1sjJW/wx-2048x1229/v1/t440x300.jpg'
      },
      {
        key: 1,
        recipeTitle: 'Pita',
        recipeSubTitle: 'Turkish Pita',
        ingredients: ['pita bread', 'Letuce', 'Ham', 'Cheese', 'Yogurt', 'Garlic'],
        instructions: 'Heat the pita bread. Cut them open and fill them with vegetables, ham and garlic dressing.',
        img: 'http://lorempixel.com/300/180/food'
      },
      {
        key: 2,
        recipeTitle: 'Roast Chicken',
        recipeSubTitle: 'Roast Sticky Chicken-Rotisserie Style',
        ingredients: ['4 teaspoons salt', '2 teaspoons paprika', '1 teaspoon onion powder', '1 teaspoon dried thyme', '1 teaspoon white pepper', '1/2 teaspoon cayenne pepper', '1/2 teaspoon black pepper', '1/2 teaspoon garlic powder', '2 onions, quartered', '2 (4 pound) whole chickens'],
        instructions: 'In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours. Preheat oven to 250 degrees F (120 degrees C). Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving.',
        img: 'http://lorempixel.com/300/180/food'
      }
    ]
  }
  return {data};
}

// page for creating recipe:
// const createRecipe

// Default page, showing all recipes:

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { recipes: []};
    this.getData = this.getData.bind(this);
    // this.getData();
  }
  getData = () => {
    const newData = CardData();
    this.setState({ recipes: newData.data });
  }
  ShowCards = (props) => {
    return (
      <div key={props.key} className='card'>
        <div className='card-block'>
          <h3 className='card-title'>{props.recipeTitle}</h3>
          <h6 className='card-subtitle text-muted'>{props.recipeSubTitle}</h6>
        </div>
        <img className='card-img-top' src={props.img} alt='fooditem' />
        <div className='card-block'>
          <p className='card-text'>{props.ingredients}</p>
          <h6>Categories: Food Food Food</h6>
        </div>
      </div>
    );
  }
  componentWillMount() {
    this.getData()
  }
  render() {
    // console.log(this.state.recipes);
    return (
      <div className='card-group'>
        { this.state.recipes.map(this.ShowCards) }
      </div>
    );
  }
};

export default App;
// <img className='card-block' src='...' alt='fooditem' />