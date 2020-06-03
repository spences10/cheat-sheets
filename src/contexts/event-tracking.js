import React, { createContext, useContext, useEffect } from 'react'

const AnalyticsContext = createContext({})

export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    if (window.location.hostname === `localhost`) {
      console.log(`I'm on localhost`)
    }
  }, [])

  const logClicks = goalId => {
    window.fathom.trackGoal(goalId, 0)
  }

  return (
    <AnalyticsContext.Provider value={logClicks}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  return useContext(AnalyticsContext)
}
