import React from 'react';
import GlobalStyles from './styles/global';
import Main from './pages/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <GlobalStyles />
    </>
  );
}

export default App;
