    import 'bootstrap/dist/css/bootstrap.min.css';
    import './sass/style.scss'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'
    import AboutResidence from './pages/AboutResidence'
    import {
      BrowserRouter as Router,
      Route
    } from 'react-router-dom'
    import ResidenceContextProvider, { ResidenceContext } from './contexts/ResidenceContextProvider';
    import BookingContextProvider from './contexts/BookingContextProvider';
    import UserContextProvider, { UserContext } from './contexts/UserContextProvider'
    import ResidenceList from './components/ResidenceList';
    import BookingList from './components/BookingList';
    import Home from './pages/Home'
    import SignUpPage from './pages/SignUpPage'
    import SignInPage from './pages/SignInPage'
    import MyPage from './pages/MyPage'
    import Help from './pages/Help'
    import ModifiedAboutResidence from './pages/ModifiedAboutResidence'
import React, { useState } from 'react';

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
    <UserContextProvider>
      <ResidenceContext.Provider value={[val, updater]}>
        <BookingContextProvider>
          <Router>
            <Navbar />
            <main>
              <Route exact path="/residences/:id"> <AboutResidence /></Route>
              <Route exact path="/my-page/residence/:id/:bookingId"> <ModifiedAboutResidence /> </Route>
              <Route exact path="/residences"> <ResidenceList /></Route>
              <Route exact path="/help"> <Help/></Route> 
              <Route exact path="/"><Home/></Route>
              <Route exact path="/my-page" component={MyPage} />
              <Route exact path="/sign-in" component={SignInPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
            </main>
            <Footer/>
          </Router>
          </BookingContextProvider>
          </ResidenceContext.Provider>
          </UserContextProvider>
        </div>
      );
    }

  export default App