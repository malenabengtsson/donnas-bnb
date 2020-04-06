    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import './sass/style.scss'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'
    import AboutResidence from './pages/AboutResidence'
    import {
      BrowserRouter as Router,
      Route
    } from 'react-router-dom'
    import ResidenceContextProvider from './contexts/ResidenceContextProvider';
    import BookingContextProvider from './contexts/BookingContextProvider';
    import UserContextProvider from './contexts/UserContextProvider'
    import ResidenceList from './components/ResidenceList';
    import BookingList from './components/BookingList';
    import Home from './pages/Home'
    import SignUpPage from './pages/SignUpPage'

    function App() {

      return (
        <div className="App">
          <UserContextProvider>
          <ResidenceContextProvider>
          <BookingContextProvider>
          <Router>
              <Navbar />
              <BookingList />
            <main>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/residences"><ResidenceList /></Route>
              <Route exact path="/about-residence"><AboutResidence /></Route>
              <Route exact path="/sign-up" component={SignUpPage} />
            </main>
            <Footer />
          </Router>
          </BookingContextProvider>
          </ResidenceContextProvider>
          </UserContextProvider>
        </div>
      );
    }

    export default App;
