import {NgModule} from "@angular/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TodorxComponent} from "./todorx.component";
import { StoreModule } from '@ngrx/store';
import {todorxReducer} from "./reducers/todorx.reducer";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  exports: [
    TodorxComponent
  ],
  imports: [
    MatCheckboxModule,
    NgForOf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forRoot({todorx: todorxReducer}, {}),
    AsyncPipe,
    ReactiveFormsModule
  ],
  declarations: [
    TodorxComponent,
  ]
})
export class TodorxModule {}
