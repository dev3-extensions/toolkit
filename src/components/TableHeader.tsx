export const TableHeader = () => {
  return (
    <tr>
      <th className="border border-neutral-500 text-center py-3 w-10">
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
      </th>
      <th className="border border-neutral-500 text-center py-3 w-1/12">Method</th>
      <th className="border border-neutral-500 text-center py-3">URL</th>
      <th className="border border-neutral-500 text-center py-3 w-1/12">Status</th>
      <th className="border border-neutral-500 text-center py-3 w-20">Time</th>
      <th className="border border-neutral-500 text-center py-3 w-1/12">Cache</th>
      <th className="border border-neutral-500 text-center py-3 w-2/12">IP</th>
    </tr>
  )
}
