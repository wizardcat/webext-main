import { IndexedDB, store } from './indexedDb';

export class ServiceLocator {
  private static indexedDB: IndexedDB;
  public static getIndexedDB(): IndexedDB {
    if (!ServiceLocator.indexedDB) {
      console.log('Creating new IndexedDB');
      ServiceLocator.indexedDB = store;
    }
    return ServiceLocator.indexedDB;
  }
}
