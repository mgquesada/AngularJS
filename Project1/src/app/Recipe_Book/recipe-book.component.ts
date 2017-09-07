import {Component} from '@angular/core'
import {Recipe} from './recipe.model';
import {DropdownDirective} from '../shared/dropdown.directive';
import {RecipeService} from './recipe.service';
@Component({
	selector: "recipe-book",
	templateUrl: './recipe-book.component.html',
	styleUrls: ['./recipe-book.component.css'],
	providers: [RecipeService]
})

export class RecipeBookComponent{
	selectedRecipe:Recipe;
	constructor(private recipeService: RecipeService){}
	ngOnInit(){												//listen to even from recipe-item here
		this.recipeService.recipeSelected.subscribe(
			(recipe:Recipe)=>{
				this.selectedRecipe = recipe;
			});
	}

}