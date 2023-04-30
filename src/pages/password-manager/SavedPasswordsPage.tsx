import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { BackButton } from '~/components/BackButton'
import { CopyButton } from '~/components/CopyButton'
import { ShowHideButton } from '~/components/ShowHideButton'

import { PasswordInfo } from '~/types/Password'
import { getAllPasswords } from '~/utils/DatabaseHandler'

export const SavedPasswordsPage = () => {
  const [passwords, setPasswords] = useState<PasswordInfo[]>([])
  const [showPassword, setShowPassword] = useState<boolean[]>([])

  useEffect(() => {
    getAllPasswords().then((passwords: PasswordInfo[]) => {
      setPasswords(passwords)
      setShowPassword(new Array(passwords.length).fill(false))
    })

    console.log(passwords)
  }, [])

  return (
    <div className="h-[420px] w-[370px] overflow-y-auto bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <p className="text-3xl font-bold">Saved Passwords</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 divide-y divide-neutral-700">
            {passwords.map((password, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="mt-2 flex place-content-between items-center">
                  <p className="text-lg font-semibold">{password.name}</p>
                  <p className="text-sm">{password.url}</p>
                </div>
                <div className="flex gap-2">
                  <input
                    className={clsx(
                      'w-full truncate rounded-lg border p-2.5 font-mono font-medium shadow-md outline-none',
                      'border-neutral-400/50 bg-neutral-400/10 dark:border-neutral-700 dark:bg-neutral-700/10',
                      'hover:ring-1 hover:ring-blue-600/50 focus:ring-2 focus:ring-blue-600'
                    )}
                    type={showPassword[index] ? 'text' : 'password'}
                    value={password.password}
                    readOnly
                  />
                  <ShowHideButton
                    index={index}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                  <CopyButton passwordInfo={password} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
