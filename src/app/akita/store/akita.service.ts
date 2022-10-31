import {TodoAkitaStore} from "./akita.store";
import {TodoItemModel} from "../../app.models";
import {Injectable} from "@angular/core";
@Injectable({ providedIn: 'root' })
export class AkitaService {
  constructor( private store: TodoAkitaStore) {}
  add(name: string) {
    const item = {
      name: name,
      id: Math.floor(Math.random() * 1000),
      checked: false
    } as TodoItemModel;
    this.store.update(state => ({
      items: [...state.items, item]
    }))
    console.log(this.store.getValue())
  }
  toggle(id: number) {
    this.store.update(state => ({
      items: state.items.map(d => {
        if(d.id == id) {
          return {...d, checked: !d.checked}
        }
        return d;
      })
    }))
    console.log(this.store.getValue())
  }
}
