import {Component} from '@angular/core';
import {Age} from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'aksony';

    carouselItem: Age = {
        id: 1,
        age: 'junior',
        photoUrl: '../assets/person.png'
    };

    if1stSelected: boolean = false;

    isCheckedFromCarouselOne(value) {

        if (true) {
            console.log(this + 'haha');
            this.if1stSelected = true;
        } else {
            this.if1stSelected = false;

        }
    }

}
