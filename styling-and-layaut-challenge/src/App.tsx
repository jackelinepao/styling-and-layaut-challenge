import React from 'react';
import logo from './logo.svg';
import Home from './views/HomePage';
import Routes from './Routes/index';
import SideBar from './components/SideBar';
import SideRight from './components/SideRight';

function App() {
  return (
    <div className="App">
      <SideBar /> 
      <Routes />
      <SideRight />
    </div>
  );
}

export default App;
