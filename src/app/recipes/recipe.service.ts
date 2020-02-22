
import {Recipe} from './recipe.model';

export class recipeService
{
   private recipes:Recipe[]=[
        new Recipe('Egg Curry','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdMGxW6c9PHroDG-wMXq3zFYZQ6i_0rmo2JH1hwRPQe2dKokI8'),
        new Recipe('Egg Cake','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6hxsP6_EzISOAE_dLoA1Ld5kMDFvU7QVxJUJUBpuFjYFou7GO')
      ];


getRecipe()
{

    return this.recipes.slice();
}

}
