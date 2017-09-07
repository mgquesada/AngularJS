import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent} from './Header/header.component';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './Shopping_List/shopping_list.component';
import { ShoppingListEditComponent } from './Shopping_List/Shopping_List_Edit/shopping_list_edit.component';
import { RecipeListComponent } from './Recipe_Book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipe_Book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe_Book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './Recipe_Book/recipe-book.component';
import { DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './Shopping_List/shopping_list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
