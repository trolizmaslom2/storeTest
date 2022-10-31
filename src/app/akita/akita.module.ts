import {NgModule} from "@angular/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {AkitaComponent} from "./akita.component";
import {NG_ENTITY_SERVICE_CONFIG} from "@datorama/akita-ng-entity-service";
import {environment} from "../../environments/environment";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";
import {AkitaNgRouterStoreModule} from "@datorama/akita-ng-router-store";
@NgModule({
  exports: [
    AkitaComponent
  ],
  imports: [
    MatCheckboxModule,
    NgForOf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AsyncPipe,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
  ],
  declarations: [
    AkitaComponent,
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}]
})
export class AkitaModule {}
