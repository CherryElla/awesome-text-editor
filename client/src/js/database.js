import { openDB } from 'idb';

const initdb = async () =>
  openDB('ate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('ate')) {
        console.log('jte database already exists');
        return;
      }
      db.createObjectStore('ate', { keyPath: 'id', autoIncrement: true });
      console.log('ate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const database = await openDB('ate', 1)
  const tran = database.transaction('ate', 'readwrite');
  const store = tran.objectStore('ate');
  await store.put(content);
  await tran.done;
  console.log('Date saved to the database', content);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const database = await openDB('ate', 1);
  const tran = database.transaction('ate', 'readonly');
  const store = tran.objectStore('ate');
  await store.getAll()
  await tran.done;
  }


initdb();
