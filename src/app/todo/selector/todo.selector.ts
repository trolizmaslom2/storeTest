import {Selector} from "@ngxs/store";
import {TodoState, TodoStateModel} from "../state/todo.state";
import {TodoItemModel} from "../../app.models";

export class TodoSelector{
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoItemModel[]{
    return state.items;
  }
}
