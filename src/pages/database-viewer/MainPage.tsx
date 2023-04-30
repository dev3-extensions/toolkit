import { Plus, Search, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'

import { BackButton } from '~/components/BackButton'
import table from '~/data/table.json'

type Table = {
  name: string
  id: string
  type: string
  description: string
}

export const MainPage = () => {
  const [data, setData] = useState<Table[]>([])

  const parsedTableData = table.table1.slice(1).map((row) => ({
    id: row[0],
    name: row[1],
    type: row[2],
    description: row[3],
  }))
  useEffect(() => {}, [])

  return (
    <>
      <div className="h-[400px] w-[600px] overflow-y-auto bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <p className="text-3xl font-bold">Database Viewer</p>
            <div className="flex gap-4 rounded-full bg-neutral-800 px-4 py-2">
              <button>
                <Plus strokeWidth={2} size={18} />
              </button>
              <button>
                <Search strokeWidth={2} size={16} />
              </button>
              <button>
                <Settings strokeWidth={2} size={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3/12">
              <p className="rounded bg-neutral-700 px-3 py-1 text-center text-sm font-medium">
                IndexedDB
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="rounded bg-neutral-700 px-3 py-1 text-center text-sm font-medium">
                <p>Database (testing data here)</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded bg-neutral-700 px-3 py-1 hover:bg-neutral-800"
                  onClick={() => {
                    setData(parsedTableData)
                  }}
                >
                  Read data
                </button>
                <button
                  className="rounded bg-neutral-700 px-3 py-1 hover:bg-neutral-800"
                  onClick={() => {
                    setData([])
                  }}
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-col gap-4 text-xs">
                <table>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
