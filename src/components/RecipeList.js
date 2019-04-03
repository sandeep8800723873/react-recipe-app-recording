import React,{Component} from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import {recipes}  from '../tempList';

export default class RecipeList extends Component {
    render() {
        const { recipes,handleDetails,value, handleChange, handleSubmit,error } = this.props;
    return (
      <React.Fragment>
          <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
    <div className="conatiner my-5">
    <div className="row">
    <div className="col-10 mx-auto col md-6 text-center text-uppercase mb-3">
    <h1 className="text-slanted"> Recipe List</h1>
    </div>
    </div>
    <div className="row">
    {error?<h1 className="text-danger mx-auto text-center">{error}</h1> : recipes.map(recipe =>{
        return (<Recipe key={recipe.recipe_id}
        recipe={recipe} handleDetails={handleDetails}/>)
    })}
   
    
    </div>
    </div>     
      </React.Fragment>
        
      
    )
  }
}
