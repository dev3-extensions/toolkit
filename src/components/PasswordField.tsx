import clsx from 'clsx'

import { PasswordInfo } from '~/types/Password'

/**
 * Type for the props of the PasswordDisplay component
 */
type PasswordFieldProps = {
  passwordInfo: PasswordInfo
}

export const PasswordField = ({ passwordInfo }: PasswordFieldProps) => {
  return (
    <input
      id="password"
      value={passwordInfo.password}
      type="text"
      readOnly={true}
      className={clsx(
        'w-full rounded-lg border p-2.5 font-mono font-medium shadow-md outline-none',
        'border-neutral-400/50 bg-neutral-400/10 dark:border-neutral-700 dark:bg-neutral-700/10',
        'hover:ring-1 hover:ring-blue-600/50 focus:ring-2 focus:ring-blue-600'
      )}
    />
  )
}
