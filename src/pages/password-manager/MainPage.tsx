import clsx from 'clsx'
import { List } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-chrome-extension-router'

import { CopyButton } from '~/components/CopyButton'
import { GenerateButton } from '~/components/GenerateButton'
import { PasswordField } from '~/components/PasswordField'
import { PasswordOptions } from '~/components/PasswordOptions'
import { Dialog } from '~/components/ui/Dialog'

import { BackButton } from '~/components/BackButton'
import { PasswordInfo } from '~/components/extensions/password-manager/types/Password'
import { SavedPasswordsPage } from '~/pages/password-manager/SavedPasswordsPage'
import { initDatabase } from '~/utils/DatabaseHandler'
import { initStorage } from '~/utils/EncryptHandler'
import { PasswordGenerator } from '~/utils/PasswordGenerator'

export const MainPage = () => {
  // State to store password options
  const [strengthOption, setStrengthOption] = useState(1)
  const [numbersOption, setNumbersOption] = useState(true)
  const [symbolsOption, setSymbolsOption] = useState(true)

  // Password state to store all the password information
  const [passwordInfo, setPasswordInfo] = useState<PasswordInfo>({
    name: '',
    password: '',
    url: '',
  })

  // Runs on page load (only once due to empty dependency array)
  useEffect(() => {
    // Initialising Database
    initDatabase()
    // Initialising Local Storage
    initStorage()
  }, [])

  /**
   * Password handler to generate the password
   */
  const handlerGeneratePassword = (): void => {
    let generator = new PasswordGenerator()
    setPasswordInfo({
      ...passwordInfo,
      password: generator.generatePassword(strengthOption, numbersOption, symbolsOption),
    })
  }

  return (
    <>
      <div className="min-h-[420px] w-[370px] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-4 items-center">
            <BackButton />
            <p className="text-3xl font-bold">Password Manager</p>
          </div>
          <div className="flex gap-2">
            <GenerateButton handler={handlerGeneratePassword} />
            <CopyButton passwordInfo={passwordInfo} />
            <Dialog
              buttonText="Save"
              passwordInfo={passwordInfo}
              setPasswordInfo={setPasswordInfo}
            />
          </div>
          <PasswordField passwordInfo={passwordInfo} />
          <PasswordOptions
            setStrengthOption={setStrengthOption}
            setNumbersOption={setNumbersOption}
            setSymbolsOption={setSymbolsOption}
          />
          <div className="mt-2 flex items-center justify-center">
            <Link
              component={SavedPasswordsPage}
              className={clsx(
                'flex w-fit items-center gap-2 rounded-lg border px-4 py-2 font-semibold shadow-md',
                'border-neutral-400/50 bg-neutral-300/50 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-700/50',
                'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
              )}
            >
              <List size={18} />
              Saved Passwords
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
