import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {TodoItemModel} from "../../app.models";
import {Todo} from "../actions/todo.actions";

export interface TodoStateModel {
  items: TodoItemModel[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
@Injectable()
export class TodoState {
  @Selector()
  static getTodoItems(state: TodoStateModel) {
    return state.items
  }

  @Action(Todo.Add)
  addItem(ctx: StateContext<TodoStateModel>, {payload}: Todo.Add) {
    const state = ctx.getState();
    if (!payload) return;
    const item = {
      name: payload,
      id: Math.floor(Math.random() * 1000),
      checked: false
    } as TodoItemModel;
    ctx.setState({
      ...state,
      items: [...state.items, item]
    })
    console.log(ctx.getState())
  }

  @Action(Todo.Toggle)
  toggleItem(ctx: StateContext<TodoStateModel>, {id}: Todo.Toggle)  {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.map(d => {
        if(d.id == id) {
          return {...d, checked: !d.checked}
        }
        return d;
      })
    })
    console.log(ctx.getState());
  }
}
