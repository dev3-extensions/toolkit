import { ArrowLeft } from 'lucide-react'
import { goBack } from 'react-chrome-extension-router'

export const BackButton = () => {
  return (
    <button
      onClick={() => goBack()}
      className="rounded-lg dark:bg-neutral-800 p-2 hover:bg-blue-500/25 bg-neutral-300"
    >
      <ArrowLeft />
    </button>
  )
}
