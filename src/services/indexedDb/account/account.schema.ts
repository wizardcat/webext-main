export namespace DBAccount {
  export interface Schema {
    id?: number;
    email: string;
    url: string;
  }

  export const SchemaKeys = ['++id', 'email', 'url'];
}
