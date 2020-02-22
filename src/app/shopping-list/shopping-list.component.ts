import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    
  ];

  constructor(private shoppingServices:shoppingService) { }

  ngOnInit() {
    this.ingredients=this.shoppingServices.getIngredints();
    this.shoppingServices.updatedIngredint.subscribe(
     (ing:Ingredient[])=>{this.ingredients=ing} 
    )
  }

 
}
