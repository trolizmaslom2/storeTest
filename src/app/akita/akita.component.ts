import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {TodoItemModel} from "../app.models";
import {AkitaService} from "./store/akita.service";
import {AkitaQuery} from "./store/akita.query";

@Component({
  selector: 'app-akita',
  templateUrl: './akita.component.html',
  styleUrls: ['./akita.component.scss']
})
export class AkitaComponent implements OnInit{
  name = new FormControl('');
  items$: Observable<TodoItemModel[]>;
  constructor(private akitaSvc: AkitaService,
              private akitaQuery: AkitaQuery) { }
  ngOnInit() {
    this.items$ = this.akitaQuery.selectItems$;
  }
  addItem() {
    this.akitaSvc.add(this.name.value);
    this.name.reset();
  }
  toggle(id) {
    this.akitaSvc.toggle(id);
  }

}
