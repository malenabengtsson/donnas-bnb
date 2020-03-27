import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutResidence from './pages/AboutResidence'
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
          <AboutResidence />
        <Footer />
        <main>
          <Route exact path="/" component={this}/>
        </main>
      </Router>
    </div>
  );
}

export default App;
