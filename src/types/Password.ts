/**
 * Representing a password object
 * A password has a Name for identifying the website, the encrypted password and an URL
 */

class Password {
  name: string
  password: string
  url: string

  constructor(name: string, password: string, url: string) {
    this.name = name
    this.password = password
    this.url = url
  }
}

export type PasswordInfo = {
  // id?: string
  name: string
  password: string
  url: string
}

export { Password }
