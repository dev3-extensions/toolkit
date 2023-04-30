import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { X } from 'lucide-react'

import { SaveButton } from '~/components/SaveButton'
import { PasswordInfo } from '~/components/extensions/password-manager/types/Password'
import { addEntry } from '~/utils/DatabaseHandler'

type DialogProps = {
  buttonText: string
  passwordInfo: PasswordInfo
  setPasswordInfo: React.Dispatch<React.SetStateAction<PasswordInfo>>
}

export const Dialog = ({ buttonText, passwordInfo, setPasswordInfo }: DialogProps) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger>
        <SaveButton buttonText={buttonText} />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-neutral-600/50" />
        <DialogPrimitive.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-100 p-6 shadow-2xl focus:outline-none dark:bg-neutral-900">
          <div className="flex flex-col gap-4">
            {/* Title and Description */}
            <DialogPrimitive.Title className="text-xl font-semibold">
              Save Password
            </DialogPrimitive.Title>
            <DialogPrimitive.Description>Enter password details</DialogPrimitive.Description>

            {/* Input Fields in Dialog Box */}
            <fieldset className="flex items-center gap-5">
              <label className="w-1/4 text-right" htmlFor="name">
                Name
              </label>
              <input
                className={clsx(
                  'w-full rounded-lg border p-2.5 font-medium shadow-md outline-none',
                  'border-neutral-400/50 bg-neutral-400/10 dark:border-neutral-700 dark:bg-neutral-700/10',
                  'hover:ring-1 hover:ring-blue-600/50 focus:ring-2 focus:ring-blue-600'
                )}
                id="name"
                type="text"
                readOnly={false}
                placeholder="Enter name of website"
                onChange={(e) => setPasswordInfo({ ...passwordInfo, name: e.target.value })}
              />
            </fieldset>

            {/* Save Changes Button */}
            <div className="flex justify-end">
              <DialogPrimitive.Close asChild>
                <button
                  onClick={() => {
                    let queryOptions = { active: true, lastFocusedWindow: true }
                    chrome.tabs.query(queryOptions, (tab) => {
                      let url = new URL(tab[0].url!)
                      addEntry({
                        name: passwordInfo.name,
                        password: passwordInfo.password,
                        url: url.hostname,
                      })
                    })
                  }}
                  className={clsx(
                    'flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold leading-none text-white shadow-md',
                    'border-neutral-300/50 bg-blue-600 hover:bg-blue-600/90 active:bg-blue-700 dark:border-neutral-700',
                    'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
                  )}
                >
                  Save changes
                </button>
              </DialogPrimitive.Close>
            </div>

            {/* Close Button */}
            <DialogPrimitive.Close asChild>
              <button
                className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-600"
                aria-label="Close"
              >
                <X />
              </button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
