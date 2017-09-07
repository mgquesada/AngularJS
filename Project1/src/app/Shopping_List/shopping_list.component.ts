import {Component, OnInit} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping_list.service';
@Component({
	selector: 'shopping-list',
	templateUrl: './shopping_list.component.html',
	styleUrls: ['./shopping_list.component.css']
})

export class ShoppingListComponent implements OnInit{
	ingredients: Ingredient[];
	constructor(private shoppingListService: ShoppingListService){}

	onIngredientAdded(ingredient: Ingredient){
		this.ingredients.push(ingredient);
	}

	ngOnInit(){
		this.ingredients = this.shoppingListService.getIngredients();
		this.shoppingListService.ingredientsChanged.subscribe(
			(ingredients: Ingredient[])=>{
				this.ingredients = ingredients;
			});
	}
}
