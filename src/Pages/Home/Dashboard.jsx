import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../Context/InstalledAppsContext';
import UseApps from '../../Hooks/UseApps';

const Dashboard = () => {
    const{installedApps}=useContext(InstalledAppsContext);
    const{apps}=UseApps();
    const uninstalledApps=(apps.length-installedApps.length)
    const data = [
  { name: 'InstalledApps', value:installedApps.length, fill: '#0088FE' },
  { name: 'UninstallApps', value:uninstalledApps, fill: '#00C49F' }]

    return (
        <>
           <h1 className='text-center text-3xl font-bold my-10 text-purple-400'>Installed & Uninstalled Apps</h1>
      <div className='flex justify-center items-center min-h-[60vh]'>
     
              <PieChart c style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
      </div>
      </>
    );
};

export default Dashboard;