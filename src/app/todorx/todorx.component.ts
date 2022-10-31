import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTodoRx} from "./selectors/todorx.selector";
import {FormControl} from "@angular/forms";
import {map} from "rxjs";
import {TodoRxAdd, TodoRxToggle} from "./actions/todorx.actions";

@Component({
  selector: 'app-todorx',
  templateUrl: './todorx.component.html',
  styleUrls: ['./todorx.component.scss']
})
export class TodorxComponent {
  name = new FormControl('');
  items$ = this.store.select(selectTodoRx).pipe(map(x=> x.items));
  constructor(private store: Store) { }
  addItem() {
    this.store.dispatch(TodoRxAdd({name: this.name.value}));
    this.name.reset();
  }
  toggle(id) {
    this.store.dispatch(TodoRxToggle({id}));
  }
}
