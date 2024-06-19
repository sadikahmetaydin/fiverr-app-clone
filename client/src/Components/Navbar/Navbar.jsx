import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Style Connection
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>

        <div className="links">
          <span>Fiverr Bussines</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>

      {active && (
        <>
          <hr />

          <div className="menu">
            <span>Test</span>
            <span>Test 2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
