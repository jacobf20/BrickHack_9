import React, { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/Home'
import ButtonAppBar from './Components/ButtonAppBar'
import UploadRun from './Pages/UploadRun';

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <Login setUser={setUser} />
  }

  return (
    <BrowserRouter>
    <ButtonAppBar user={user} setUser={setUser}/>
      {/* <div className='App'> */}
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="uploadRun" element={<UploadRun />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
