import {State} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {TodoItemModel} from "../../app.models";

@State<TodoItemModel[]>({
  name: 'todo',
  defaults: []
})
@Injectable()
export class TodoState {}
