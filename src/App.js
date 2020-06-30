import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { GlobalStyle } from "./style.js";
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Detail from './pages/detail';
import Home from './pages/home';


function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <GlobalStyleFont />
          <Header/>
          <BrowserRouter>
           <div>
            <Route path='/' exact component= {Home}></Route>
            <Route path='/detail' exact  component= {Detail}></Route>
           </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
