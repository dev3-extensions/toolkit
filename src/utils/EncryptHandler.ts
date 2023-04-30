import CryptoJS from 'crypto-js'

import { PasswordGenerator } from '~/utils/PasswordGenerator'

const STORAGE_KEY = 'key'
const MASTER_KEY = import.meta.env.VITE_MASTER_KEY

/**
 * It encrypts a string using AES-256 bit encryption
 * @param input The password to encrypt
 * @returns an encrypted string
 */
export const encrypt = (input: string) => {
  if (!isStorageEmpty()) {
    // TODO: Refactor below
    const encryptedKey = localStorage.getItem(STORAGE_KEY)!
    const decryptedKey = CryptoJS.AES.decrypt(encryptedKey, MASTER_KEY).toString()

    const encryptedText = CryptoJS.AES.encrypt(input, decryptedKey, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Iso97971,
    })
    return encryptedText
  }
}

/**
 * It decrypts a string using the cipher provided
 * @param ciphertext the cipher to decrypt the password
 * @returns a plain string with original password
 */
export const decrypt = (ciphertext: string | CryptoJS.lib.CipherParams) => {
  // TODO: Refactor below
  const encryptedKey = localStorage.getItem(STORAGE_KEY)!
  const decryptedKey = CryptoJS.AES.decrypt(encryptedKey, MASTER_KEY).toString()

  const bytes = CryptoJS.AES.decrypt(ciphertext, decryptedKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Iso97971,
  })
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}

/**
 * It initialise the local storage where the Master Key is stored
 * encrypted using AES-256.
 */
export const initStorage = () => {
  if (isStorageEmpty()) {
    let pg = new PasswordGenerator()

    // The passphrase used to generate the key
    let passphrase = pg.generatePassword(32, true, true)

    // Salt generated from random wordarray
    let salt = CryptoJS.lib.WordArray.random(256)

    /**
     * Generating a key using PBKDF2 to not have a plain text passphrase
     */
    let key256Bit: string = CryptoJS.PBKDF2(passphrase, salt, {
      keySize: 256,
      iterations: 100,
    }).toString()

    // Encoding the key
    let key: string = CryptoJS.enc.Hex.parse(key256Bit).toString()
    // Encrypting the key using master password
    let encryptedKey = CryptoJS.AES.encrypt(key, MASTER_KEY).toString()
    // Storing into local storage
    localStorage.setItem(STORAGE_KEY, encryptedKey.toString())
  }
}

/**
 * It checks if the local storage has the key.
 * @returns true if local storage is empty, false otherwise
 */
const isStorageEmpty = (): boolean => {
  if (localStorage.getItem(STORAGE_KEY) == null) {
    return true
  } else return false
}
