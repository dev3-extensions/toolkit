import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'

import { Checkbox } from '../../components/ui/Checkbox'

import { BackButton } from '~/components/BackButton'
import { deleteAdvancedOptions } from '../../utils/ChromeUtilities'
import { MainPage } from './MainPage'

/**
 * Data for rendering all of the checkboxes
 */
const checkboxData = [
  { id: 1, name: 'appcache', text: 'App Cache' },
  { id: 2, name: 'cache', text: 'Browser Cache' },
  { id: 3, name: 'cookies', text: 'Cookies' },
  { id: 4, name: 'downloads', text: 'Downloads List' },
  { id: 5, name: 'fileSystems', text: 'File Systems' },
  { id: 6, name: 'formData', text: 'Form Data' },
  { id: 7, name: 'history', text: 'History' },
  { id: 8, name: 'indexedDB', text: 'IndexedDB Database' },
  { id: 9, name: 'localStorage', text: 'LocalStorage Data' },
  { id: 10, name: 'passwords', text: 'Passwords' },
  { id: 11, name: 'webSQL', text: 'WebSQL Database' },
]

/**
 * The type of the selected options state
 */
export type SelectedOptions = {
  appcache: boolean
  cache: boolean
  cookies: boolean
  downloads: boolean
  fileSystems: boolean
  formData: boolean
  history: boolean
  indexedDB: boolean
  localStorage: boolean
  passwords: boolean
  serviceWorkers: boolean
  webSQL: boolean
}

export const SettingsPage = () => {
  // Sets the default state of the history, cookies, and cache checkboxes to true
  const [selectedOptions, setSelectedOptions] = useState({
    history: true,
    cookies: true,
    cache: true,
  } as SelectedOptions)

  /**
   * Updates the state of the checkboxes when they are clicked
   * @param optionName The name of the option that was clicked
   * @param isChecked Whether or not the checkbox is checked
   */
  const handleOptionChange = (optionName: string, isChecked: boolean): void => {
    setSelectedOptions({
      ...selectedOptions,
      [optionName]: isChecked,
    })
  }

  return (
    <div className="min-h-[300px] w-[370px] bg-neutral-100 dark:bg-neutral-900">
      <header className="flex items-center gap-4 p-6 pr-0 pb-0">
        <BackButton />
        <h1 className="text-3xl font-bold">Advanced Options</h1>
      </header>

      <div className="flex flex-col gap-4 p-6">
        {checkboxData.map(({ name, text }) => (
          <Checkbox
            key={name}
            text={text}
            onChange={(isChecked) => handleOptionChange(name, isChecked)}
            defaultState={selectedOptions[name as keyof SelectedOptions]}
          />
        ))}

        <div className="flex justify-evenly gap-4 pt-4">
          <button
            className="w-full rounded bg-gradient-to-tr from-blue-500 to-violet-500 px-4 py-2 font-semibold text-white hover:from-blue-600 hover:to-violet-600 active:from-blue-700 active:to-violet-700"
            onClick={() => {
              deleteAdvancedOptions(selectedOptions)
              console.log('clicked')
            }}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  )
}
