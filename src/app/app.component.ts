import {Component} from '@angular/core';
import {Material} from './model';
import {Person} from './model';
import {MaterialFunction} from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'aksony';

    //  person object

    personObject: Person[] = [
        {id: 1, age: 'Junior', photoUrl: '../assets/person.png'},
        {id: 2, age: 'Dorosły', photoUrl: '../assets/person.png'},
        {id: 3, age: 'Senior', photoUrl: '../assets/person.png'}
    ];

    //  meterial object

    materialObject: Material[] = [
        {id: 4, material: 'Drewno', photoUrl: '../assets/material.png'},
        {id: 5, material: 'Plastik', photoUrl: '../assets/material.png'},
        {id: 6, material: 'Metal', photoUrl: '../assets/material.png'}
    ];

    //  function object

    functionObject: MaterialFunction[] = [
        {id: 7, function: 'Ćwiczenie pamięci', photoUrl: '../assets/function.png'},
        {id: 8, function: 'Ćwiczenie wyobraźni', photoUrl: '../assets/function.png'},
        {id: 9, function: 'Zabicie czasu :)', photoUrl: '../assets/function.png'}
    ];

    if1stSelected: boolean = false;
    if2ndSelected: boolean = false;
    if3rdSelected: boolean = false;

    isCheckedFromCarouselOne(person) {

        if (event.target.checked) {
            this.if1stSelected = true;
            console.log(person.id);
        } else {
            this.if1stSelected = false;

        }
    }

    isCheckedFromCarouselTwo(material) {

        if (event.target.checked) {
            this.if2ndSelected = true;
            console.log(material.id);
        } else {
            this.if2ndSelected = false;
        }
    }

    isCheckedFromCarouselThree(Functionobject) {

        if (event.target.checked) {
            this.if3rdSelected = true;
            console.log(Functionobject.id);
        } else {
            this.if3rdSelected = false;

        }
    }

//    show on console completeArray


        generateToy = false;

        completeOrder() {
            this.generateToy = true;
        }

}

