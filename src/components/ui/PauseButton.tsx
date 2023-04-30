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
      className="flex items-center gap-2 px-6 py-3 bg-neutral-500 rounded-lg font-medium hover:bg-neutral-600 active:bg-neutral-700"
    >
      <PauseIcon size={20} />
      Pause
    </button>
  )
}
