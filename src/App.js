import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import MainBanner from './Components/MainBanner/MainBanner.js';
import AcquaintedBlock from './Components/AcquaintedBlock/AcquaintedBlock.js';
import UsersBlock from './Components/UsersBlock/UsersBlock.js';
import RegisterForm from './Components/RegisterForm/RegisterForm.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <Header />
        <MainBanner />
        <AcquaintedBlock />
        <UsersBlock />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
