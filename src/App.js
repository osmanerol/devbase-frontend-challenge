import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import { observer } from 'mobx-react-lite';
import store from './store';

const App =observer(() => {
  useEffect(()=>{
      store.getCountries();
  },[])

  return (
      <div>
        <Switch>
          <Route path="/" exact strict component={HomePage} />
          <Route path="/country/:country" exact strict component={FormPage} />
        </Switch>
      </div>
    );
  }
) 

export default App;