import clsx from 'clsx'
import { RefreshCw } from 'lucide-react'

/**
 * Type for the props of the GenerateButton component
 */
type GenerateButtonProps = {
  handler: () => void
}

export const GenerateButton = ({ handler }: GenerateButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Generate Password"
      onClick={handler}
      id="generate"
      className={clsx(
        'flex items-center gap-2 rounded-lg border px-4 py-2 font-semibold leading-none text-white shadow-md',
        'border-neutral-300/50 bg-blue-600 hover:bg-blue-600/90 active:bg-blue-700 dark:border-neutral-700',
        'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
      )}
    >
      <RefreshCw size={18} />
      Generate
    </button>
  )
}
