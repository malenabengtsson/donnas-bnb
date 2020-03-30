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
import ResidenceContextProvider, { ResidenceContext } from './contexts/ResidenceContextProvider';

function App() {
  return (
    <div className="App">
      <ResidenceContextProvider>
      <Router>
        <Navbar />
          <AboutResidence />
        <Footer />
        <main>
          <Route exact path="/" component={this}/>
        </main>
      </Router>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
