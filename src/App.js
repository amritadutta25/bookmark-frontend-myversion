// App.js

import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { createAction } from './actions';
import Header from './components/Header';

const App = () => {
  return(
    <div className='App'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App