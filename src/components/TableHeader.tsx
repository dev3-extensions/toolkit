export const TableHeader = () => {
  return (
    <tr>
      <th className="w-10 border border-neutral-500 py-3 text-center">
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
      </th>
      <th className="w-1/12 border border-neutral-500 py-3 text-center">Method</th>
      <th className="border border-neutral-500 py-3 text-center">URL</th>
      <th className="w-1/12 border border-neutral-500 py-3 text-center">Status</th>
      <th className="w-20 border border-neutral-500 py-3 text-center">Time</th>
      <th className="w-1/12 border border-neutral-500 py-3 text-center">Cache</th>
      <th className="w-2/12 border border-neutral-500 py-3 text-center">IP</th>
    </tr>
  )
}
