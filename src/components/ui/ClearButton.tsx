import { Trash2 } from 'lucide-react'
import { deleteAll } from '~/utils/DatabaseHandler'
import { DATABASE_NAME, DATABASE_STORE } from '~/constants/DatabaseConstants'

type ClearButtonProps = {
  setHttpRequests: React.Dispatch<React.SetStateAction<chrome.webRequest.WebResponseCacheDetails[]>>
}

export const ClearButton = ({ setHttpRequests }: ClearButtonProps) => {
  return (
    <button
      onClick={() => {
        setHttpRequests([])
        deleteAll(DATABASE_NAME.PACKETSNIFFER_NAME, DATABASE_STORE.PACKET_STORE)
      }}
      className="ml-auto flex items-center gap-2 rounded-lg bg-red-500  px-4 py-3 font-medium text-white hover:bg-red-600 active:bg-red-700"
    >
      <Trash2 size={20} />
      Clear Table
    </button>
  )
}
