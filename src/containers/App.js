import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CreateArticle, EditArticle, ShowArticle, Articles } from './';
import { loadState, configureStore } from '../lib';

const store = configureStore(loadState());

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:id/edit" component={EditArticle} />
      <Route path="/articles/:id" component={ShowArticle} />
      <Route path="/articles" component={Articles} />
    </Switch>
  </Provider>
);

export default App;
