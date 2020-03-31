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
              <ResidenceList />
              <BookingList />
              <AboutResidence />
            <Footer />
            <main>
              <Route exact path="/" component={this}/>
              <Route exact path="/about-residence" component={AboutResidence}/>
            </main>
          </Router>
          </BookingContextProvider>
          </ResidenceContextProvider>
        </div>
      );
    }

    export default App;
