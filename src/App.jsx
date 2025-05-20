import { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only once run when the app components loads....

    auth.onIdTokenChanged(authUser => {
      console.log('THE user is', authUser);

      if (authUser) {
        // the user is logged
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
