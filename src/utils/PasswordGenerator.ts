import { PASSWORD_LENGTH } from '~/constants/PasswordLength'

/**
 * String of data containing string for all password options
 */
const PASSWORD_OPTIONS = {
  NUMBERS: '0123456789',
  SYMBOLS: '!@#$%^&*()',
  CHARACTERS_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  CHARACTERS_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}

let passwordLength: number

/**
 * Class representing a password generator.
 * It generates a random password based on the desired length
 */
class PasswordGenerator {
  /**
   *  Function used to generate random password using Crypto Library
   * @returns a randomly generated password.
   * @param length the length value of the password
   * @param numbers using numbers flag
   * @param symbols using symbols flag
   * @returns the password generated
   */
  generatePassword(length: number, numbers: boolean, symbols: boolean): string {
    // Flags to determine if symbols or numbers have been used
    let isSymbol: boolean = false
    let isNumber: boolean = false
    // Initial empty password
    let password: string = ''
    let availableChars = PASSWORD_OPTIONS.CHARACTERS_LOWER + PASSWORD_OPTIONS.CHARACTERS_UPPER

    switch (length) {
      case 0:
        passwordLength = PASSWORD_LENGTH.SMALL
        break

      case 1:
        passwordLength = PASSWORD_LENGTH.MEDIUM
        break

      case 2:
        passwordLength = PASSWORD_LENGTH.LONG
        break

      default:
        passwordLength = length
        break
    }

    // The characters pool
    const charPool: string[] = []

    if (numbers && symbols) {
      availableChars += PASSWORD_OPTIONS.NUMBERS + PASSWORD_OPTIONS.SYMBOLS
    } else if (numbers) {
      availableChars += PASSWORD_OPTIONS.NUMBERS
    } else if (symbols) {
      availableChars += PASSWORD_OPTIONS.SYMBOLS
    }

    // Adding numbers and symbols
    while (charPool.length < passwordLength) {
      // Checking if number has been added
      if (numbers && !isNumber) {
        charPool.push(this.genRandomChar(PASSWORD_OPTIONS.NUMBERS))
        isNumber = true
      }

      // Checking if symbol as been added
      if (symbols && !isSymbol) {
        charPool.push(this.genRandomChar(PASSWORD_OPTIONS.SYMBOLS))
        isSymbol = true
      } else {
        charPool.push(this.genRandomChar(availableChars))
      }
    } // End of While

    // Shuffling the list and returning
    password = this.shuffleList(charPool).join('')
    return password
  } // End of Method

  /**
   * It shuffles characters among random index
   * using Fisher-Yates algorithm
   * @param charArray the Array of string to shuffle
   * @returns a shuffled array
   */
  shuffleList(charArray: string[]): string[] {
    for (let i = charArray.length - 1; i > 0; i--) {
      // Generating random index to swap
      const swapIndex = this.randomNumber(charArray.length)
      // The character to swap
      const charToSwap = charArray[i]
      charArray[i] = charArray[swapIndex]
      charArray[swapIndex] = charToSwap
    }
    return charArray
  }
  /**
   * It gets a truly-random character from a given string
   * @param string the string we would like to take a character from
   * @returns a random string representing a random character
   */
  genRandomChar(string: string): string {
    return string[this.randomNumber(string.length)]
  }

  /**
   * Method which generates a random integer between 0 and Max
   * @param maxValue the maximum value randomly generated
   * @returns a random integer between 0 and maxValue
   */
  randomNumber(maxValue: number): number {
    const noBytes = Math.ceil(Math.log2(maxValue / 8))
    if (!noBytes) {
      return 0
    }

    const maxNum = Math.pow(256, noBytes)
    const bufferArray = new Uint8Array(noBytes)

    while (true) {
      crypto.getRandomValues(bufferArray)
      let value = 0
      for (let i = 0; i < noBytes; i++) {
        value = (value << 8) + bufferArray[i]
      }
      if (value < maxNum - (maxNum % maxValue)) {
        // Absolute value to avoid signed bits
        return Math.abs(value % maxValue)
      }
    }
  }

  /***********************************\
  |* Empty constructor for the class *|
  \***********************************/
  constructor() {}
}

export { PasswordGenerator }
