import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

//Mis componentes

import {LoginComponent} from "./components/login/login.component";


@NgModule({
    declarations: [
        AppComponent,
        //mis componentes
        LoginComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
