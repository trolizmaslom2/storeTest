import {createFeatureSelector} from "@ngrx/store";
import {TodoStateModel} from "../../todo/state/todo.state";

export const selectTodoRx = createFeatureSelector<TodoStateModel>('todorx');
