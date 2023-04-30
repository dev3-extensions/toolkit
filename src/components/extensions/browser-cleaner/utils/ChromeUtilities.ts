import type { SelectedOptions } from '../pages/SettingsPage'

// Variable declartions
const Hour = 1000 * 60 * 60 //1000 milliseconds (1sec) * 60 (60sec) * 60 (60min) - hour calculation

const OneHour = new Date().getTime() - Hour // 1 hour - used in chrome.history.deleteRange method
const OneDay = new Date().getTime() - Hour * 24 // 1 day - used in chrome.history.deleteRange method

// Confirms that the history has been sucessfully deleted
export const successfulDelete = () => {
  console.log('Task Successful')
}

// Utilizes the chrome.history API and deleteRange method to delete search history from past hour
export const deleteOneHour = () => {
  chrome.history.deleteRange(
    {
      startTime: OneHour,
      endTime: Date.now(),
    },
    successfulDelete
  )
}

// Utilizes the chrome.history API and deleteRange method to delete search history from past day
export const deleteOneDay = () => {
  chrome.history.deleteRange(
    {
      startTime: OneDay,
      endTime: Date.now(),
    },
    successfulDelete
  )
}

// Utilizes the chrome.history API and deleteAll method to delete all search history
export const deleteAllTime = () => {
  chrome.history.deleteAll(successfulDelete)
}

// Utilizes the chrome.browsingData API and remove method to delete all browser data
export const deleteAdvancedOptions = (selectedOptions: SelectedOptions) => {
  chrome.browsingData.remove(
    {
      since: 0,
    },
    selectedOptions
  )
}
