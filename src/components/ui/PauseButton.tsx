import { PauseIcon, Play } from 'lucide-react'

type PauseButtonProps = {
  isPaused: boolean
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
}

export const PauseButton = ({ isPaused, setIsPaused }: PauseButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsPaused((prev) => !prev)
      }}
      className="flex items-center gap-2 rounded-lg bg-neutral-500 p-3 font-medium text-white hover:bg-neutral-600 active:bg-neutral-700"
    >
      {isPaused ? <Play size={20} /> : <PauseIcon size={20} />}
    </button>
  )
}
