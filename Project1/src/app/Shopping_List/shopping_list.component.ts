import {Component} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model';
@Component({
	selector: 'shopping-list',
	templateUrl: './shopping_list.component.html',
	styleUrls: ['./shopping_list.component.css']
})

export class ShoppingListComponent{
	ingredients = [
	new Ingredient('Apples', 5),
	new Ingredient('Oranges', 10)
	];
}
