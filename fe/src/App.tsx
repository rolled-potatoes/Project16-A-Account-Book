import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import AuthCheck from 'pages/AuthCheck';
import LoginPage from './pages/LoginPage';
import OauthCallbackPage from './pages/OauthCallbackPage';
import MainPage from './pages/MainPage';
import CreateTransactionPage from './pages/CreateTransactionPage';

const TransactionRouter = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <AuthCheck />
      <Switch>
        <Route path={`${url}/create`} component={CreateTransactionPage} />
        <Route path={url} component={MainPage} />
      </Switch>
    </>
  );
};

const LoginRouter = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          exact
          path={`${url}/oauth-callback`}
          component={OauthCallbackPage}
        />
        <Route path={`${url}`} component={LoginPage} />
      </Switch>
    </>
  );
};

const AccountRouter = () => {
  return (
    <>
      <AuthCheck />
      가계부 선택
    </>
  );
};

const App = () => {
  return (
    <GlobalThemeProvider>
      <AuthCheck />
      <Router>
        <Switch>
          <Route path="/login" component={LoginRouter} />
          <Route path="/accounts" component={AccountRouter} />
          <Route path="/transactions/:title" component={TransactionRouter} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
