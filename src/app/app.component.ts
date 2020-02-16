import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  load:string='recipe';

  onSelect(data1:string)
  {
this.load=data1;

  }

}
