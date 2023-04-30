import { ArrowLeft } from 'lucide-react'
import { goBack } from 'react-chrome-extension-router'

export const BackButton = () => {
  return (
    <button
      onClick={() => goBack()}
      className="rounded-lg bg-neutral-800 p-2 hover:bg-neutral-800/75"
    >
      <ArrowLeft />
    </button>
  )
}
