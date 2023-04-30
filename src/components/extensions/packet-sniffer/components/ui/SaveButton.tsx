import { Save } from 'lucide-react'

export const SaveButton = () => {
  return (
    <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 active:bg-blue-700">
      <Save size={20} />
      Save
    </button>
  )
}
