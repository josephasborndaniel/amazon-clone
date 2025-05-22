import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-[100px]">
      <nav className="space-x-4">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
        <Link to="/refund" className="hover:underline">Cancellation and Refund</Link>
        <Link to="/shipping" className="hover:underline">Shipping and Delivery</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </nav>
    </footer>
  );
}

export default Footer;
