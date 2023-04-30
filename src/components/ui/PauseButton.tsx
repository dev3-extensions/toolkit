import { PauseIcon } from 'lucide-react'

type PauseButtonProps = {
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
}

export const PauseButton = ({ setIsPaused }: PauseButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsPaused((prev) => !prev)
      }}
      className="flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white hover:bg-amber-600 active:bg-amber-700"
    >
      <PauseIcon size={20} />
      Pause
    </button>
  )
}
