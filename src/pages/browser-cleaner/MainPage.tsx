import clsx from 'clsx'
import { Settings } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'

import { BackButton } from '~/components/BackButton'
import { RadioGroup } from '~/components/ui/RadioGroup'
import { SettingsPage } from '~/pages/browser-cleaner/SettingsPage'
import { deleteAllTime, deleteOneDay, deleteOneHour } from '~/utils/BrowserCleaner'

/**
 * Data for rendering all of the radio buttons
 */
const durationsData = [
  { id: '1hr', title: 'Last 60 minutes' },
  { id: '24hrs', title: 'Last 24 hours' },
  { id: 'alltime', title: 'All time' },
]

export const MainPage = () => {
  // State for the duration option
  const [durationOption, setDurationOption] = useState(durationsData[0].title)

  /**
   * Deletes the history based on the duration option
   */
  const handleDurationChange = () => {
    switch (durationOption) {
      case durationsData[0].title:
        deleteOneHour()
        break
      case durationsData[1].title:
        deleteOneDay()
        break
      case durationsData[2].title:
        deleteAllTime()
        break
      default:
        break
    }
  }

  return (
    <main className="h-[370px] w-[370px] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-4">
            <BackButton />
            <header className="text-3xl font-bold">Browser Cleaner</header>
          </div>
          <RadioGroup durations={durationsData} setDurationOption={setDurationOption} />
        </div>
        <div className="flex flex-col gap-4 bg-neutral-200 p-6 dark:bg-neutral-800/50">
          <p className="text-sm font-semibold italic">
            Warning! This will permanently clear your browser history
          </p>
          <div className="flex gap-4">
            <Link
              component={SettingsPage}
              className={clsx(
                'rounded bg-neutral-400/50 px-4 py-2 hover:bg-neutral-500/50 active:bg-neutral-600/50 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:active:bg-neutral-700/50',
                'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-200 dark:focus-visible:ring-offset-gray-800'
              )}
            >
              <Settings />
            </Link>
            <button
              type="button"
              onClick={() => handleDurationChange}
              className={clsx(
                'w-full rounded bg-gradient-to-tr from-red-500 to-red-600 px-4 py-2 font-bold text-white hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800',
                'focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-200 dark:focus-visible:ring-offset-gray-800'
              )}
            >
              Clear Data
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
