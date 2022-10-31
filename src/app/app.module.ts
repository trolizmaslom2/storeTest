import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodoModule} from "./todo/todo.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TodorxModule} from "./todorx/todorx.module";
import {AkitaModule} from "./akita/akita.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoModule,
    TodorxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    AkitaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
