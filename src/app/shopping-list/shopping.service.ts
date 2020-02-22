import {Ingredient} from '../Shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class shoppingService
{
updatedIngredint=new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
getIngredints()
{

   return  this.ingredients.slice();
}

addIngredints(ingredient:Ingredient)
{
this.ingredients.push(ingredient)
this.updatedIngredint.emit(this.ingredients.slice());
}
addtoshoppingList(ingredient:Ingredient[])
{
this.ingredients.push(...ingredient)
this.updatedIngredint.emit(this.ingredients.slice())

}

}