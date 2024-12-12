import React from 'react';
import './App.css';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;