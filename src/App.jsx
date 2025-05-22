import { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider'
import Payment from './components/Payment'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CancellationRefund from './pages/CancellationRefund'
import ShippingDelivery from './pages/ShippingDelivery'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

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
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <Header />
              <PrivacyPolicy />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <TermsConditions />
            </>
          }
        />
        <Route
          path="/refund"
          element={
            <>
              <Header />
              <CancellationRefund />
            </>
          }
        />
        <Route
          path="/shipping"
          element={
            <>
              <Header />
              <ShippingDelivery />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactUs />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
