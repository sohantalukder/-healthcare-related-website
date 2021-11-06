import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>

            <PrivateRoute path='/reviews'>
              <Reviews></Reviews>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
