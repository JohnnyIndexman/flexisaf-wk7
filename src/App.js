import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import { UserProvider } from './UserContext';
import Counter from './Counter';
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="App">
          <h1>RedCont Counter</h1>
          <Counter />
        </div>
      </UserProvider>
    </Provider>
  );
}

export default App;
