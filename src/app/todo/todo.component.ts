import { Component, OnInit } from '@angular/core';
import {TodoItemModel} from "../app.models";
import {Select, Store} from "@ngxs/store";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Todo} from "./actions/todo.actions";
import {TodoSelector} from "./selector/todo.selector";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  name = new FormControl('');
  @Select(TodoSelector.todoItems)
  items$: Observable<TodoItemModel[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }
  addItem() {
    this.store.dispatch(new Todo.Add(this.name.value)).subscribe(() => this.name.reset());
  }
  toggle(id) {
    this.store.dispatch(new Todo.Toggle(id));
  }
}
