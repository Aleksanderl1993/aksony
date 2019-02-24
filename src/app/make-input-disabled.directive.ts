import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appMakeInputDisabled]'
})
export class MakeInputDisabledDirective {

    constructor(private element: ElementRef) {
    }

    @HostListener('change', ['$event']) onChange($event) {
        console.log(this);
        this.element.nativeElement.setAttribute('disabled', 'disabled');
    }
}
