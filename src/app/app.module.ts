import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

//  bootstrap modules:

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';

// do obsługi ngModel:

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MakeInputDisabledDirective } from './make-input-disabled.directive';

@NgModule({
    declarations: [
        AppComponent,
        MakeInputDisabledDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
