import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

import { GlobalStyle } from "./style.js";
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import Header from './common/header/index';


function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleFont />
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
