import React from 'react';

import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';

// Navigation, Route Component는 HashRouter 안에 있어야 한다.  
// Route에는 path, component 2가지 props를 전달할 수 있다.
// path: 이동할URL
// component: URL에 해당하는 Component
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  );
}
export default App;
