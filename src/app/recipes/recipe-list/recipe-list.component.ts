import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Veg Burger', 'This is simply a test', 'https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1563381003/hatch-chile-smash-burgers-FT-seo-RECIPE0719.jpg?itok=zXF8V0iW'),
    new Recipe('NoN-Veg Burger', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmzKfP66SOeBi5BoQidIvAeoxHOctJ06TLVLkkEfPvuThPkS8l')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
