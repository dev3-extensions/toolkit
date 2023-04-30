import { ArrowLeft } from 'lucide-react'
import { goBack } from 'react-chrome-extension-router'

export const BackButton = () => {
  return (
    <button
      onClick={() => goBack()}
      className="bg-neutral-800 hover:bg-neutral-800/75 p-2 rounded-lg"
    >
      <ArrowLeft />
    </button>
  )
}
