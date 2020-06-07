import React from 'react';
import 'styles/index.scss';
import MainLayout from 'container/MainLayout';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Route path={'/'} component={MainLayout} />                                  
      </Router>
    </div>
  );
}

export default App;
