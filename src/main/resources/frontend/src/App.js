import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HouseRental from './components/HouseRental'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <HouseRental />
        <Footer />
        <main>
          <Route exact path="/" component={this}/>
        </main>
      </Router>
    </div>
  );
}

export default App;
