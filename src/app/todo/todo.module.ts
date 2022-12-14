import {NgModule} from "@angular/core";
import {TodoComponent} from "./todo.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import {TodoState} from "./state/todo.state";

@NgModule({
  exports: [
    TodoComponent
  ],
  imports: [
    MatCheckboxModule,
    NgForOf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxsModule.forRoot([TodoState], {
      developmentMode: !environment.production
    }),
    ReactiveFormsModule,
    AsyncPipe
  ],
  declarations: [
    TodoComponent,
  ]
})
export class TodoModule {}
