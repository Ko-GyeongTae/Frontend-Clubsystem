import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/routes';
import { getAccessToken } from './utils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(getAccessToken() ? true : false);
  })
  return (
    <BrowserRouter>
      <Router isLoggedIn={isLoggedIn}/>
    </BrowserRouter>
  )
}

export default App;
