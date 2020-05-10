import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import MainBanner from './Components/MainBanner/MainBanner.js';
import AcquaintedBlock from './Components/AcquaintedBlock/AcquaintedBlock.js';
// import UsersBlock from './Components/UsersBlock/UsersBlock.js';
// import RegisterForm from './Components/RegisterForm/RegisterForm.js';
import Footer from './Components/Footer/Footer.js';
import UsersBlockContainer from './Components/UsersBlock/UsersBlockContainer';
import { Provider } from 'react-redux';
import store from './Redux/ReduxStore';
import RegisterFormContainer from './Components/RegisterForm/RegisterFormContainer';

function App() {
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <Provider store={store}>
          <Header />
          <MainBanner />
          <AcquaintedBlock />
          <UsersBlockContainer />
          <RegisterFormContainer />
          <Footer />
        </Provider>
      </div>
    </div>
  );
}

export default App;
