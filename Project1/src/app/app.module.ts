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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
