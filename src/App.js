import React from 'react';
import Navbar from './components/layout/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/index';
import ComingSoonPages from './components/ComingSoonPages/index';
import Landing from './components/Landing/index';
import { SidebarData } from './components/layout/navbar/SidebarData';

import './App.scss';

function App() {
  // filtered sidebar paths, for showing dynamic routes(coming soon)
  const pathname = SidebarData.filter((sidebar) => sidebar.path !== '/dashboard').map((data, i) => data.path);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <>
            <Navbar />
            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route exact path={pathname} component={ComingSoonPages}></Route>
          </>
        </Switch>
      </Router>
    </>
  );
}

export default App;
