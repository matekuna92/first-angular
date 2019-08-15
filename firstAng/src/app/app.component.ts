import { Component } from '@angular/core';

/* komponens belépőpontja az app component.ts, 2 részből áll: 
 @Component - komponens dekorátor (más néven metadata) + egy typeScript class-ból 
 
 Komponens írja le, hogy "mit tud, mi érhető el"
 class: komponenshez tartozó változók, függvények

 https://angular.io/guide/architecture -> az ábrán a Component a lenti component Class, a Metadata pedig a metadata, dekorátor, maga az app component HTML pedig a template
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'First App';
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
