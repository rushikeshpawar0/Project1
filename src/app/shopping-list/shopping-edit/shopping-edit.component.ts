import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import {Ingredients} from '../../Shared/ingredients.model'
import { stringify } from 'querystring';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('Inname',{static:false}) nameref:ElementRef;
  @ViewChild('Inamount',{static:false}) amountref:ElementRef;
 @Output() ingredientsemit=new EventEmitter<Ingredients>();
  ngOnInit() {
  }
add()
{
const Innameandamount=new Ingredients(this.nameref.nativeElement.value,this.amountref.nativeElement.value)
this.ingredientsemit.emit(Innameandamount);
}
}
