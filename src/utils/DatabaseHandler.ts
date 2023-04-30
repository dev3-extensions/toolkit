import { PasswordInfo } from '~/types/Password'
import { encrypt } from '~/utils/EncryptionHandler'
import { DATABASE_NAME, DATABASE_STORE } from '~/constants/DatabaseConstants'

/**
 * It initialise the connection to the database and on first connection it creates the schema
 */
export const initPasswordDatabase = () => {
  const openRequest = globalThis.indexedDB.open(DATABASE_NAME.PASSWORD_NAME)
  let db: IDBDatabase | null = null

  openRequest.onerror = (e) => {
    console.error('Error opening DB', e)
  }

  openRequest.onsuccess = (e) => {
    db = openRequest.result
  }

  openRequest.onupgradeneeded = (e) => {
    db = openRequest.result
    const store = db.createObjectStore(DATABASE_STORE.PASSWORD_STORE, {
      keyPath: 'name',
      autoIncrement: true,
    })

    store.createIndex('name', ['name'], { unique: true })
    store.createIndex('password', ['password'], { unique: true })
    store.createIndex('url', ['url'], { unique: false })
  }

  console.log('Database initialised')
} // End of method

/**
 * Packet-sniffer
 * It initialise the connection to the database and on first connection it creates the schema
 */
export const initPacketsDatabase = () => {
  const openRequest = globalThis.indexedDB.open(DATABASE_NAME.PACKETSNIFFER_NAME)
  let db: IDBDatabase | null = null

  openRequest.onerror = (e) => {
    console.error('Error opening DB', e)
  }

  openRequest.onsuccess = (e) => {
    db = openRequest.result
  }

  openRequest.onupgradeneeded = (e) => {
    db = openRequest.result
    const store = db.createObjectStore(DATABASE_STORE.PACKET_STORE, {
      keyPath: 'time',
      autoIncrement: true,
    })

    store.createIndex('time', ['time'], { unique: false })
    store.createIndex('method', ['method'], { unique: false })
    store.createIndex('url', ['url'], { unique: false })
    store.createIndex('status', ['status'], { unique: false })
    store.createIndex('cache', ['cache'], { unique: false })
    store.createIndex('ip', ['ip'], { unique: false })
  }

  console.log('Packet database initialised')
} // End of method

export const addPacketEntry = (entry: chrome.webRequest.WebResponseCacheDetails) => {
  // Opening the database
  const request = indexedDB.open(DATABASE_NAME.PACKETSNIFFER_NAME)

  request.onsuccess = () => {
    const db = request.result
    // Transaction
    const transaction = db.transaction(DATABASE_STORE.PACKET_STORE, 'readwrite')

    // Initialising the store
    const store = transaction.objectStore(DATABASE_STORE.PACKET_STORE)

    // Inserting the password details on the tables according to schema
    store.put({
      time: entry.timeStamp,
      method: entry.method,
      url: entry.url,
      status: entry.statusCode,
      cache: entry.fromCache,
      ip: entry.ip,
    })

    if (request.readyState == 'done') {
      console.log('Data added')
      db.close()
    }
  }
} // End of method

/**
 * It adds a password to the database
 * @param entry the password to add into the database
 */
export const addPasswordEntry = (entry: PasswordInfo) => {
  // Opening the database
  const request = indexedDB.open(DATABASE_NAME.PASSWORD_NAME)

  request.onsuccess = () => {
    const db = request.result
    // Transaction
    const transaction = db.transaction(DATABASE_STORE.PASSWORD_STORE, 'readwrite')

    // Initialising the store
    const store = transaction.objectStore(DATABASE_STORE.PASSWORD_STORE)
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
  const request = indexedDB.open(DATABASE_NAME.PASSWORD_NAME)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DATABASE_STORE.PASSWORD_STORE, 'readonly')

    // Store
    const store = transaction.objectStore(DATABASE_STORE.PASSWORD_STORE)
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
  const request = indexedDB.open(DATABASE_NAME.PASSWORD_NAME)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result
    // Transaction
    const transaction = db.transaction(DATABASE_STORE.PASSWORD_STORE, 'readwrite')
    // Store
    const store = transaction.objectStore(DATABASE_STORE.PASSWORD_STORE)
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

/**
 * It deletes all elements from the database specified
 * @param element The element to delete
 */
export const deleteAll = (dbName: string, storeName: string) => {
  const request = indexedDB.open(dbName)

  request.onsuccess = () => {
    console.log('Reading from database')
    const db = request.result

    // Transaction
    const transaction = db.transaction(storeName, 'readwrite')
    // Store
    const store = transaction.objectStore(storeName)

    // Clearing the store
    const objectStoreRequest = store.clear()

    objectStoreRequest.onsuccess = (event) => {
      console.log('Request successful')
    }
    console.log('Everything deleted from Database')
  }
}

/**
 * It gets all the password from the database
 * @returns A promise The list of passwords stored
 */
export const getAllPasswords = (): Promise<PasswordInfo[]> => {
  return new Promise((resolve, reject) => {
    const requestInitial = indexedDB.open(DATABASE_NAME.PASSWORD_NAME)

    requestInitial.onsuccess = () => {
      console.log('Reading from database')
      const db = requestInitial.result
      // Transaction
      const transaction = db.transaction(DATABASE_STORE.PASSWORD_STORE, 'readonly')

      // Store
      const objectStore = transaction.objectStore(DATABASE_STORE.PASSWORD_STORE)
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
