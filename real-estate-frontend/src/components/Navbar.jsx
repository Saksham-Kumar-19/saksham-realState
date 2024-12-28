import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const hideListingsLink = location.pathname === '/' || location.pathname === '/register';

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav>
      <h1>Real Estate Platform</h1>
      <ul>
        {location.pathname !== '/' && <li><Link to="/">Login</Link></li>}
        {location.pathname !== '/register' && <li><Link to="/register">Register</Link></li>}
        {!hideListingsLink && <li><Link to="/listings">Listings</Link></li>}
        {localStorage.getItem('token') && (
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
