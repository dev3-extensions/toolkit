import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-chrome-extension-router'

import { CopyButton } from '~/components/extensions/password-manager/components/CopyButton'
import { getAllPasswords } from '~/components/extensions/password-manager/database/DatabaseHandler'
import { PasswordInfo } from '~/components/extensions/password-manager/types/Password'
import { MainPage } from '~/pages/password-manager/MainPage'

export const SavedPasswordsPage = () => {
  const [passwords, setPasswords] = useState<PasswordInfo[]>([])

  useEffect(() => {
    getAllPasswords().then((passwords: PasswordInfo[]) => {
      setPasswords(passwords)
    })
  }, [])

  return (
    <div className="h-[500px] w-[370px] overflow-y-auto bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50">
      <div className="flex flex-col gap-4 p-4">
        <p className="my-1.5 text-3xl font-bold">Saved Passwords</p>
        <div className="flex flex-col gap-2">
          <Link
            className="flex w-max rounded-full border border-neutral-400/50 bg-neutral-300/50 px-4 py-2 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-700/50"
            component={MainPage}
          >
            <ArrowLeft />
            <p className="pl-2">Go back</p>
          </Link>
          <div className="flex flex-col gap-4 divide-y divide-neutral-700">
            {passwords.map((password) => (
              <div className="flex flex-col gap-1">
                <div className="mt-2 flex place-content-between items-center">
                  <p className="text-lg font-semibold">{password.name}</p>
                  <p className="text-sm">{password.url}</p>
                </div>
                <div className="flex gap-2">
                  <input
                    className={clsx(
                      'w-full rounded-lg border p-2.5 font-mono font-medium shadow-md outline-none',
                      'border-neutral-400/50 bg-neutral-400/10 dark:border-neutral-700 dark:bg-neutral-700/10',
                      'hover:ring-1 hover:ring-blue-600/50 focus:ring-2 focus:ring-blue-600'
                    )}
                    type="text"
                    value={password.password}
                    readOnly
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
