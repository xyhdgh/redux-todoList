import React from 'react';
import Header from './components/Header/Header.jsx'
import Table from './components/Table/Table.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Table />
        <Footer />
      </div>
    </Provider>
    
  );
}

export default App;
