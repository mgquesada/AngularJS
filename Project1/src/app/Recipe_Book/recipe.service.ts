import {Recipe} from './recipe.model';
import {EventEmitter,Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../Shopping_List/shopping_list.service';
@Injectable()
export class RecipeService{

	private recipes:Recipe[]= [
  	new Recipe('Salmon', 'A seafood dish', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',[new Ingredient('Meat',1)]),
 	new Recipe('Chicken', 'A poultry dish', 'http://clv.h-cdn.co/assets/16/03/1453406146-skillet-chicken-with-creamy-cilantro-lime-sauce-3.jpg',[new Ingredient('Buns',2)])

  ];
  constructor(private shoppingListService: ShoppingListService){}
  	getRecipes(){
  		return this.recipes.slice();//returns a shallow copy
  	}
  	//for cross component communication 
  	recipeSelected = new EventEmitter<Recipe>();
  	addIngredientsToShoppingList(ingredients: Ingredient[]){
  		this.shoppingListService.addIngredients(ingredients);
  	}
}