import { useEffect, useState } from 'react'

import { BackButton } from '~/components/BackButton'
import { TableDemoData } from '~/components/TableDemoData'
import { TableHeader } from '~/components/TableHeader'
import { ClearButton } from '~/components/ui/ClearButton'
import { PauseButton } from '~/components/ui/PauseButton'
import { SaveButton } from '~/components/ui/SaveButton'

import { addPacketEntry, initPacketsDatabase } from '~/utils/DatabaseHandler'

const convertTimestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

export const MainPage = () => {
  const [httpRequests, setHttpRequests] = useState<chrome.webRequest.WebResponseCacheDetails[]>([])
  const [isPaused, setIsPaused] = useState(false)
  initPacketsDatabase()

  useEffect(() => {
    initPacketsDatabase()

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
          ip: details.ip,
          responseHeaders: details.responseHeaders,
          initiator: details.initiator,
        }
        setHttpRequests((prevRequests) => [...prevRequests, request])

        addPacketEntry(request)
      }

      chrome.webRequest.onCompleted.addListener(handleRequest, { urls: ['<all_urls>'] })

      return () => {
        chrome.webRequest.onCompleted.removeListener(handleRequest)
      }
    }
  }, [])

  return (
    <div className="h-[600px] w-[800px] overflow-y-scroll bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <p className="text-3xl font-bold">Packet Sniffer</p>
          <ClearButton setHttpRequests={setHttpRequests} />
          <PauseButton setIsPaused={setIsPaused} />
          <SaveButton />
        </div>
        <div>
          <table className="w-full table-fixed border-collapse border border-neutral-600 text-left text-sm text-neutral-500 dark:text-neutral-400">
            <thead className="bg-neutral-300 text-xs uppercase text-neutral-700 dark:bg-neutral-700 dark:text-neutral-400">
              <TableHeader />
            </thead>
            <tbody className="divide-y divide-neutral-700 text-neutral-900 dark:text-neutral-100">
              {/* <TableDemoData /> */}
              {httpRequests.map((request, index) => (
                <tr key={index} className="bg-white dark:bg-neutral-800">
                  <td className="w-10 border border-neutral-500 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                      ></input>
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="border border-neutral-600 py-2 text-center">{request.method}</td>
                  <td className="truncate border border-neutral-600 py-2 pl-2">{request.url}</td>
                  <td className="border border-neutral-600 py-2 text-center">
                    {request.statusCode}
                  </td>
                  <td className="truncate border border-neutral-600 py-2 text-center">
                    {convertTimestampToDate(request.timeStamp)}
                  </td>
                  <td className="border border-neutral-600 py-2 text-center">
                    {request.fromCache.toString()}
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
