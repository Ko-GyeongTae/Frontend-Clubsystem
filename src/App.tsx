import React, { useEffect, useState } from 'react';
import Router from './components/routes';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(false);
    setLoading(true);
  }, []);

  function loginCallBack(login: any) {
    setIsLogin(login);
  }

  if (loading) {
    return (
      <Router isLogin={isLogin} callback={loginCallBack}/>
    )
  } else {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

}

export default App;
