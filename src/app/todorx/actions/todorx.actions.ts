import {createAction, props} from "@ngrx/store";

export const TodoRxAdd = createAction(
  '[Todo] Add',
  props<{ name: string }>());
export const TodoRxToggle = createAction(
  '[Todo] Toggle',
  props<{ id: number }>()
);
