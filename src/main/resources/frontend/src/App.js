import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Help from './pages/Help'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
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
          
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/perform-login" component={Login}/>
          <Route exact path="/perform-register" component={Register}/>
          <Route exact path="/help" component={Help}/>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;