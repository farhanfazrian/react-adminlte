import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { routes } from './routes'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div class="content-wrapper">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;