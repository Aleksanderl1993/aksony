import {Component, HostBinding} from '@angular/core';
import {Age} from './model';
import {Material} from './model';
import {Person} from './model';
import {MaterialFunction} from './model';

import {CommonModule} from '@angular/common';
import {NgModel} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {compareArrays} from 'ngx-bootstrap/chronos/utils/compare-arrays';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'aksony';

    carouselItem: Age = {
        id: 1,
        age: 'Junior',
        photoUrl: '../assets/person.png'
    };


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

    // completeArray: Array<number> = [];

    // completeArrayA = '';
    // completeArrayB = '';
    // completeArrayC = '';

    isCheckedFromCarouselOne(person) {

        if (event.target.checked) {
            let completeArrayA;
            this.if1stSelected = true;
            completeArrayA = person.id;
            console.log(person.id);
            console.log(completeArrayA);



        } else {
            this.if1stSelected = false;

        }
    }

    isCheckedFromCarouselTwo(material) {

        if (event.target.checked) {
            let completeArrayB;
            this.if2ndSelected = true;
            completeArrayB = material.id;
            console.log(material.id);
            console.log(completeArrayB);

        } else {
            this.if2ndSelected = false;

        }
    }

    isCheckedFromCarouselThree(Functionobject) {

        if (event.target.checked) {
            let completeArrayC;
            this.if3rdSelected = true;
            completeArrayC = Functionobject.id;
            console.log(Functionobject.id);
            console.log(completeArrayC);

        } else {
            this.if3rdSelected = false;

        }
    }



//    show on console completeArray

}

