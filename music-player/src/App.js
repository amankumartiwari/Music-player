import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/main'
function App() {
  return (
    <div className="App" style={{marginLeft:'30px',marginTop:'20px',marginRight:'30px'}}>
       <Header/>
       <Main/>

    </div>
  );
}

export default App;
