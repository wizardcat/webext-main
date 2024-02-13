import Dexie, { PromiseExtended } from 'dexie';

import { DBAccount } from './account.schema';
import { AccountTypes } from './account.types';

export class AccountRepository {
  public table: Dexie.Table<DBAccount.Schema, string>;

  constructor(db: Dexie) {
    this.table = db.table<DBAccount.Schema, string>('accounts');
  }

  createAccount(body: AccountTypes.CreateAccount): PromiseExtended<string> {
    return this.table.add({
      email: body.email,
      url: body.url,
    });
  }

  async getAccount(
    email: string
  ): Promise<PromiseExtended<DBAccount.Schema | undefined>> {
    return this.table.where('email').equals(email).first();
  }

  async getLastAccount(): Promise<
    PromiseExtended<DBAccount.Schema | undefined>
  > {
    return this.table.orderBy('id').last();
  }
}
