import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'firstAng';
  korte = 'korte';

  arr = [1,2,3,4,5,6,7];  // osztályváltozók

  constructor()
  {
      console.log('Hey');
      // console.log(arr); osztályváltozó nem használható a függvényben -> this.arr -ral kell hivatkozni rá, jelezni kell, hogy 
      // osztályváltozót akarok használni:   
      console.log(this.arr);

      /*
      console.log(this.arr.filter(function(item)
      {
        return item > 4;
      }));
      */

      // ES6+ verzió: 
      console.log( this.arr.filter((item) => item > 4) );
      console.log( this.arr.map((item) => item*2) );

      // első futásnál veszi a 0. és 1. elemet, ezekre hajtja végre a műveletet
      console.log( this.arr.reduce((x,y) => x + y) );

      // immutabilibity, változtathatatlanság: nem változtatható az eredeti tömb/object

      // új tömböt állítok elő, az eredeti tömb nem változik !
      const tomb = this.arr.filter((item) => item > 4);
      console.log('Tomb:', tomb);
      console.log('Original array:', this.arr);
    }
}
