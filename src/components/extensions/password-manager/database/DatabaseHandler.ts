import { encrypt } from '~/components/extensions/password-manager/backend/EncryptHandler'
import { PasswordInfo } from '~/components/extensions/password-manager/types/Password'

// Constants to be used
const DB_NAME = 'passwords-list'
const DB_STORE = 'passwords'

/**
 * It initialise the connection to the database and on first connection it creates the schema
 */
export const initDatabase = () => {
  const openRequest = globalThis.indexedDB.open(DB_NAME)
  let db: IDBDatabase | null = null

  openRequest.onerror = (e) => {
    console.error('Error opening DB', e)
  }

  openRequest.onsuccess = (e) => {
    db = openRequest.result
  }

  openRequest.onupgradeneeded = (e) => {
    db = openRequest.result
    const store = db.createObjectStore(DB_STORE, { keyPath: 'name', autoIncrement: true })

    store.createIndex('name', ['name'], { unique: true })
    store.createIndex('password', ['password'], { unique: true })
    store.createIndex('url', ['url'], { unique: false })
  }

  console.log('Database initialised')
} // End of method

/**
 * It adds a password to the database
 * @param entry the password to add into the database
 */
export const addEntry = (entry: PasswordInfo) => {
  // Opening the database
  const request = indexedDB.open(DB_NAME)

  request.onsuccess = () => {
    const db = request.result
    // Transaction
    const transaction = db.transaction(DB_STORE, 'readwrite')

    // Initialising the store
    const store = transaction.objectStore(DB_STORE)
    // Encrypting password
    let encryptedPassword: string = encrypt(entry.password)!.toString()

    // Inserting the password details on the tables according to schema
    store.put({ name: entry.name, password: encryptedPassword, url: entry.url })

    if (request.readyState == 'done') {
      console.log('Data added')
      db.close()
    }
  }
} // End of method

/**
 * It gets the password from the database using the index specified
 * @param element the indexed element to fetch from the database
 * @returns the password to string
 */
export const getPassword = (element: string) => {
  const request = indexedDB.open(DB_NAME)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DB_STORE, 'readonly')

    // Store
    const store = transaction.objectStore(DB_STORE)
    const nameIndex = store.index('name')
    // Index
    const nameQuery = nameIndex.get([element])

    nameQuery.onsuccess = () => {
      console.log('nameQuery', nameQuery.result.password)
      return nameQuery.result.password.toString()
    }
  }
} // End of method

/**
 * It deletes an element from the database specifying the element to delete
 * @param element The element to delete
 */
export const deletePassword = (element: string) => {
  const request = indexedDB.open(DB_NAME)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DB_STORE, 'readwrite')
    // Store
    const store = transaction.objectStore(DB_STORE)
    // Index
    const nameIndex = store.index('name')
    const nameKeyRequest = nameIndex.getKey([element])

    nameKeyRequest.onsuccess = () => {
      // Setting the key
      const nameKey = nameKeyRequest.result as IDBValidKey
      // Delete the entry
      store.delete(nameKey)
      console.log('Password Deleted from Database')
    }
  }
}

export const getAllPasswords = (): Promise<PasswordInfo[]> => {
  return new Promise((resolve, reject) => {
    const requestInitial = indexedDB.open(DB_NAME)

    requestInitial.onsuccess = () => {
      console.log('Reading from database')
      const db = requestInitial.result
      // Transaction
      const transaction = db.transaction(DB_STORE, 'readonly')

      // Store
      const objectStore = transaction.objectStore(DB_STORE)
      // Index
      const request = objectStore.getAll()

      request.onsuccess = () => {
        // console.log('nameQuery', request.result)
        resolve(request.result)
        // return nameQuery.result
      }

      request.onerror = () => {
        reject(request.error)
      }
    }
  })
}
