import Dexie from 'dexie';

import { AccountRepository } from './account/account.repository';
import { DBAccount } from './account/account.schema';

export class IndexedDB extends Dexie {
  public readonly accounts!: AccountRepository;

  constructor() {
    super('webext');

    const tablesV1: Record<string, string> = {
      accounts: DBAccount.SchemaKeys.join(','),
    };

    this.version(1).stores({ ...tablesV1 });

    // V1
    this.accounts = new AccountRepository(this);
  }
}

export const store = new IndexedDB();
