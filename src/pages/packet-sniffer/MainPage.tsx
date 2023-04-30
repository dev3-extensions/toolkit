import { useEffect, useState } from 'react'

import { TableDemoData } from '~/components/extensions/packet-sniffer/components/TableDemoData'
import { TableHeader } from '~/components/extensions/packet-sniffer/components/TableHeader'

import { ClearButton } from '~/components/extensions/packet-sniffer/components/ui/ClearButton'
import { PauseButton } from '~/components/extensions/packet-sniffer/components/ui/PauseButton'
import { SaveButton } from '~/components/extensions/packet-sniffer/components/ui/SaveButton'

export const MainPage = () => {
  const [httpRequests, setHttpRequests] = useState<chrome.webRequest.WebResponseCacheDetails[]>([])
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const handleRequest = (details: chrome.webRequest.WebResponseCacheDetails) => {
        const request: chrome.webRequest.WebResponseCacheDetails = {
          url: details.url,
          method: details.method,
          statusCode: details.statusCode,
          statusLine: details.statusLine,
          frameId: details.frameId,
          fromCache: details.fromCache,
          parentFrameId: details.parentFrameId,
          requestId: details.requestId,
          tabId: details.tabId,
          timeStamp: details.timeStamp,
          type: details.type,
        }
        setHttpRequests((prevRequests) => [...prevRequests, request])
      }

      chrome.webRequest.onCompleted.addListener(handleRequest, { urls: ['<all_urls>'] })

      return () => {
        chrome.webRequest.onCompleted.removeListener(handleRequest)
      }
    }
  }, [])

  return (
    <div className="h-[600px] w-[800px] overflow-y-scroll bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="p-4 flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <p className="text-3xl font-bold">Packet Sniffer</p>
          <ClearButton setHttpRequests={setHttpRequests} />
          <PauseButton setIsPaused={setIsPaused} />
          <SaveButton />
        </div>
        <div>
          <table className="w-full border-collapse border border-neutral-600 table-fixed text-sm text-left text-neutral-500 dark:text-neutral-400">
            <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
              <TableHeader />
            </thead>
            <tbody className="text-neutral-100 divide-y divide-neutral-700">
              <TableDemoData />
              {httpRequests.map((request, index) => (
                <tr key={index} className="bg-white dark:bg-neutral-800">
                  <td className="border border-neutral-500 text-center py-3 w-10">
                    <div className="flex items-center justify-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="border border-neutral-600 py-2 text-center">{request.method}</td>
                  <td className="border border-neutral-600 py-2 pl-2 truncate">{request.url}</td>
                  <td className="border border-neutral-600 py-2 text-center">
                    {request.statusCode}
                  </td>
                  <td className="border border-neutral-600 py-2 text-center truncate">
                    {request.timeStamp}
                  </td>
                  <td className="border border-neutral-600 py-2 text-center">
                    {request.fromCache}
                  </td>
                  <td className="border border-neutral-600 py-2 text-center">{request.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
