import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
<<<<<<< HEAD
import AboutResidence from './pages/AboutResidence'
=======

>>>>>>> residenceList_component
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
  return (
    <div className="App">
      <ResidenceContextProvider>
      <BookingContextProvider>
      <Router>
        <Navbar />
          <BookingList />
        <Footer />
        <main>
          <Route exact path="/" component={this}/>
        </main>
      </Router>
      </BookingContextProvider>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
