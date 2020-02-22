import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingService } from '../shopping-list/shopping.service';
@Injectable()
export class RecipeService
{
    serviceSelect=new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Veg Burger',
         'This is simply a test',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH-XhaoNyF7ruw1cxvTnAl3Ks9T3mMbjkvaA8duiEMQmRqVY7R'
          ,[new Ingredient('Fruit',2)
        , new Ingredient('Vegetables',3)]
          ),
        new Recipe('NoN-Veg Burger',
         'This is simply a test', 
         'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToH2E1mEPKafwSuAIaHKcvkimGvMAjMSgTJxqDQp1bDXkl6Pvy'
         ,[new Ingredient('Meat',3),
        new Ingredient('chicken',2)])
      ];
constructor(private slservice:shoppingService){

}
      getRecipe()
          {

           return this.recipes.slice(); 
          }
          addtoshopplinglist(ingredient:Ingredient[])
            {
this.slservice.addtoshoppingList(ingredient)

            }
     
}