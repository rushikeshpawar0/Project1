import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import{Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes:Recipe[]=[
    new Recipe('Egg Curry','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdMGxW6c9PHroDG-wMXq3zFYZQ6i_0rmo2JH1hwRPQe2dKokI8'),
    new Recipe('Egg Cake','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6hxsP6_EzISOAE_dLoA1Ld5kMDFvU7QVxJUJUBpuFjYFou7GO')
  ];
  constructor() { }
@Output() eventwasselected=new EventEmitter<Recipe>();
  ngOnInit() {
  }
onselected(data:Recipe)
{

this.eventwasselected.emit(data)
}
}
