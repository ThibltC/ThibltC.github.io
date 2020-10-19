import React from 'react';
import WorkInProgress from './static/images/work-in-progress-wip.jpg';
import informations from './informations';
import MyInformations from './components/MyInformations';


const App = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <MyInformations /> */}
      <img src={WorkInProgress} alt='work-in-progress'/>
    </div>
  )
}

export default App;
