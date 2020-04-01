import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Help from './pages/Help'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutResidence from './pages/AboutResidence'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import ResidenceContextProvider, { ResidenceContext } from './contexts/ResidenceContextProvider';
import BookingContextProvider, { BookingContext } from './contexts/BookingContextProvider';

import ResidenceList from './components/ResidenceList';
import BookingList from './components/BookingList';


function App() {

  // creating a useState variable for the context
  // (using an empty object - if you wanted some values
  // set from start you could set them in that object)
  const [val, setter] = useState({});
  // the setter from useState replaces everything
  // but we want a setter that updates to object instead
  const updater = x => setter({ ...val, ...x })


  return (
    <div className="App">
      <ResidenceContext.Provider value={[val, updater]}>
        <BookingContextProvider>
          <Router>
            <Navbar />
            <main>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/perform-login"> <Login/></Route>
              <Route exact path="/perform-register"><Register/></Route>
              <Route exact path="/help"> <Help/></Route> 
              <Route exact path="/residences"> <ResidenceList /></Route>
            </main>
            <Footer />
          </Router>
        </BookingContextProvider>
      </ResidenceContext.Provider>
    </div>
  );
}

export default App;
