import { Trash2 } from 'lucide-react'

type ClearButtonProps = {
  setHttpRequests: React.Dispatch<React.SetStateAction<chrome.webRequest.WebResponseCacheDetails[]>>
}

export const ClearButton = ({ setHttpRequests }: ClearButtonProps) => {
  return (
    <button
      onClick={() => setHttpRequests([])}
      className="flex items-center gap-2 ml-auto px-4 py-3 bg-red-500 rounded-lg font-medium hover:bg-red-600 active:bg-red-700"
    >
      <Trash2 size={20} />
      Clear Table
    </button>
  )
}
