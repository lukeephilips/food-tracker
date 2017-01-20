import { Component } from '@angular/core';
import { Burrito } from './burrito.model';
import { BurritosComponent } from './burritos.component';
import { NewBurritoComponent } from './new-burrito.component';
import { EditBurritoComponent } from './edit-burrito.component';



@Component({
  selector: 'root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  masterTypes: string[] = [
    'Carne asada',
    'Chicken',
    'Beef',
    'Veggie',
    'Chile verde',
    'Carnitas'
  ]
  masterBurritosList: Burrito[] = [
    new Burrito('carne asada', 'Cancun Taqueria', true, 1000, new Date()),
    new Burrito('chicken', 'Taqueria el Buen Sabor', false, 600, new Date(2016, 11, 17)),
    new Burrito('chile verde', 'El Farolito', true, 1200, new Date(2017, 1, 6))
  ]
  addBurrito(newBurrito){
    this.masterBurritosList.push(newBurrito);
  }
}