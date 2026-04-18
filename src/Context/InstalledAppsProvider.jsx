import React, { useState } from 'react';
import { InstalledAppsContext } from './InstalledAppsContext';
const InstalledAppsProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);
    const data = {
        installedApps,
        setInstalledApps
    };
    return (
        <div>
            <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>
              
        </div>
    );
};

export default InstalledAppsProvider;