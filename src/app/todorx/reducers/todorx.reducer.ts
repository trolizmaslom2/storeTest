import {TodoStateModel} from "../../todo/state/todo.state";
import {createReducer, on} from "@ngrx/store";
import {TodoRxAdd, TodoRxToggle} from "../actions/todorx.actions";
import {TodoItemModel} from "../../app.models";

export const initialState: TodoStateModel = { items: []};
export const todorxReducer = createReducer(
  initialState,
  on(TodoRxAdd, (state, {name}) => {
    if (!name) return state;
    const item = {
      name: name,
      id: Math.floor(Math.random() * 1000),
      checked: false
    } as TodoItemModel;
    return {
      ...state,
      items: [...state.items, item]
    };
  }),
  on(TodoRxToggle, (state, {id}) => {
    return {
      ...state,
      items: state.items.map(d => {
        if(d.id == id) {
          return {...d, checked: !d.checked}
        }
        return d;
      })
    };
  })
);
