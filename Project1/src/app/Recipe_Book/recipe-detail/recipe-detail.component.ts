import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit{
	@Input() recipe:Recipe;
	constructor(private recipeService: RecipeService){}
	ngOnInit(){}
	onAddToShoppingList(){
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
	}
}

/*cant do
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe[];
  
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit(){
  	this.recipe = this.recipeService.getRecipes();
  }


}

*/