// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import HomeComponent from './components/HomeComponent/HomeComponent';
import home from './pages/home';
import waitroom from './pages/waitroom.js'

const styles = StyleSheet.create({
  container: {
      height: '100vh'
  },
  content: {
      marginTop: 54
  },
  mainBlock: {
      backgroundColor: '#F7F8FC',
      padding: 30
  }
});


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/waiting-room" component={waitroom} />
              {/* <Route path="/waiting-room" component={WaitingRoomComponent} /> */}
            </Switch>  
          </Router>
      </React.Fragment>
    )
  }
}

export default App;
