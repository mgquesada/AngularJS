import {Component,Output, ElementRef, ViewChild, EventEmitter} from '@angular/core'
import {Ingredient} from '../../shared/ingredient.model'
import {ShoppingListService} from '../shopping_list.service';
@Component({
	selector: 'shopping-list-edit',
	templateUrl: './shopping_list_edit.component.html',
	styleUrls: ['./shopping_list_edit.component.css']

})

export class ShoppingListEditComponent{
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;
	//@Output() ingredientAdded = new EventEmitter<Ingredient>();
	constructor(private shoppingListService: ShoppingListService){}
	onIngredientAdd(){
		const ingName = this.nameInputRef.nativeElement.value;
		const ingAmount = this.amountInputRef.nativeElement.value;
		const newIngredient = new Ingredient(ingName,ingAmount);
		this.shoppingListService.addIngredient(newIngredient);
	}
}