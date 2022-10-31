
export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public payload: string) {}
  }

  export class Edit {
    static readonly type = '[Todo] Edit';
    constructor(public payload: any) {}
  }

  export class Toggle {
    static readonly type = '[Todo] Toggle';
    constructor(public id: number) {}
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public id: number) {}
  }
}
