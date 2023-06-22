import React, { Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import { initializedApp } from './redux/app-reducer';

import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = withSuspense(
  lazy(() => import('./components/Dialogs/DialogsContainer'))
);
const ProfileContainer = withSuspense(
  lazy(() => import('./components/Profile/ProfileContainer'))
);

const App = (props) => {
  useEffect(() => {
    props.initializedApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(connect(mapStateToProps, { initializedApp }))(App);

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

export default MainApp;
