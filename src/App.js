import React from 'react';
import GlobalStyles from './styles/global';
import Main from './pages/Main';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyles />
    </>
  );
}

export default App;
