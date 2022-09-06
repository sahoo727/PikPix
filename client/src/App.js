import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { gapi } from 'gapi-script';

import Signin from './components/SignIn/Signin';

function App() {
  gapi.load("client:auth2", () => {
    gapi.auth2.init({
      clientId:
        "272077959906-04m5tpm2vg05b7v3fs3tj9s67cfa1m3j.apps.googleusercontent.com",
      plugin_name: "PikPix",
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' exact element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App