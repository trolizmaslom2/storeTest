import {Query} from "@datorama/akita";
import {TodoStateModel} from "../../todo/state/todo.state";
import {TodoAkitaStore} from "./akita.store";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AkitaQuery extends Query<TodoStateModel> {
  selectItems$ = this.select('items');

  constructor(store: TodoAkitaStore) {
    super(store);
  }

}
