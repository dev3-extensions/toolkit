import clsx from 'clsx'
import { Save } from 'lucide-react'

type SaveButtonProps = {
  buttonText: string
}

export const SaveButton = ({ buttonText }: SaveButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Save Password"
      className={clsx(
        'flex items-center justify-center gap-2 rounded-lg border p-3 font-semibold leading-none shadow-md',
        'border-neutral-400/50 bg-neutral-300/50 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-700/50',
        'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
      )}
    >
      <Save size={18} />
      {buttonText}
    </button>
  )
}
