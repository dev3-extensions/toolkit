export const TableDemoData = () => {
  return (
    <>
      <tr className="bg-white dark:bg-neutral-800">
        <td className="border border-neutral-600 py-2 text-center">
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
        <td className="border border-neutral-600 py-2 text-center">GET</td>
        <td className="border border-neutral-600 py-2 pl-2 truncate">https://example.com/</td>
        <td className="border border-neutral-600 py-2 text-center">200</td>
        <td className="border border-neutral-600 py-2 text-center">13:24:52</td>
        <td className="border border-neutral-600 py-2 text-center">false</td>
        <td className="border border-neutral-600 py-2 text-center">undefined</td>
      </tr>
      <tr className="bg-white dark:bg-neutral-800">
        <td className="border border-neutral-600 py-2 text-center">
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
        <td className="border border-neutral-600 py-2 text-center">GET</td>
        <td className="border border-neutral-600 py-2 pl-2 truncate">
          https://www.youtube.com/youtubei/v1/att/get?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false
        </td>
        <td className="border border-neutral-600 py-2 text-center">200</td>
        <td className="border border-neutral-600 py-2 text-center">13:24:54</td>
        <td className="border border-neutral-600 py-2 text-center">false</td>
        <td className="border border-neutral-600 py-2 text-center">undefined</td>
      </tr>
    </>
  )
}
