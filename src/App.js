import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import MainBanner from './Components/MainBanner/MainBanner.js';
import AcquaintedBlock from './Components/AcquaintedBlock/AcquaintedBlock.js';
import Footer from './Components/Footer/Footer.js';
import UsersBlockContainer from './Components/UsersBlock/UsersBlockContainer';
import { Provider } from 'react-redux';
import store from './Redux/ReduxStore';
import RegisterFormContainer from './Components/RegisterForm/RegisterFormContainer';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <HashRouter>
          <Provider store={store}>
            <Header />
            <MainBanner />
            <AcquaintedBlock />
            <UsersBlockContainer />
            <RegisterFormContainer />
            <Footer />
          </Provider>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
