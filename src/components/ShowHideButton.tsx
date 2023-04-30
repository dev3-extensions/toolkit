import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

type ShowHideButtonProps = {
  index: number
  showPassword: boolean[]
  setShowPassword: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const ShowHideButton = ({ index, showPassword, setShowPassword }: ShowHideButtonProps) => {
  const [showHideStatus, setShowHideStatus] = useState(true)

  return (
    <button
      onClick={() => {
        const newShowPassword = [...showPassword]
        newShowPassword[index] = !newShowPassword[index]

        setShowHideStatus((prev) => !prev)
        setShowPassword(newShowPassword)
      }}
      className={clsx(
        'ml-auto rounded-lg border px-3 py-2 shadow-md',
        'border-neutral-400/50 bg-neutral-300/50 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-700/50',
        'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
      )}
    >
      {/* Conditionally render the eye open or eye closed icon */}
      {showHideStatus ? <Eye size={18} /> : <EyeOff size={18} />}
    </button>
  )
}
