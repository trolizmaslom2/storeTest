import {TodoStateModel} from "../../todo/state/todo.state";
import {Store, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
@Injectable({ providedIn: 'root' })
@StoreConfig({name: 'todoAkita'})
export class TodoAkitaStore extends Store<TodoStateModel> {
  constructor() {
    super({
      items: []
    });
  }
}
