import React, { createContext, useContext, useEffect } from 'react';

const AnalyticsContext = createContext({});

export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    if (typeof window.fathom === 'undefined') {
      window.fathom = (x, y, z) => {
        console.log(`I'm a fake Fathom`, x, y, z);
      };
    }
  }, []);

  const logClicks = goalId => {
    window.fathom('trackGoal', goalId, 0);
  };

  return (
    <AnalyticsContext.Provider value={logClicks}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  return useContext(AnalyticsContext);
};
