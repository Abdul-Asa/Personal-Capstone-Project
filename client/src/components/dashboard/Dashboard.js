import React, { useState } from 'react';

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const openMobile = () => {
    setToggle((value) => !value);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
  };
  return (
    <nav
      className="navbar"
      style={
        toggle
          ? { height: 250, transition: 'all 0.3s ease' }
          : { height: 90, transition: 'all 0.1s ease-in-out' }
      }
    >
      <div
        className="container"
        style={toggle ? { marginTop: 20 } : { marginTop: 0 }}
      >
        <div className="logo-nav-wrap">
          <div className="logo">
            <i className="fas fa-parking"></i> <h1>Padrone</h1>
          </div>
          <div className="links-container">
            <ul className="nav-links">
              <a href="/">
                <li className="nav-link">Profile</li>
              </a>
              <a href="/">
                <li className="nav-link">Settings</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="btn-container">
          <a href="/" className="btn-a">
            <button className="btn-logout" onClick={logout}>
              Logout <i className="fas fa-sign-out-alt"></i>
            </button>
          </a>
          <div className="mobile-icon" onClick={openMobile}>
            {toggle ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </div>
      </div>

      <div
        className="mobile-menu"
        style={toggle ? { display: 'block' } : { display: 'none' }}
      >
        {/* <hr className="line" /> */}

        <ul className="mobile-menu-list">
          <li className="mobile-menu-link">
            <a href="/">Profile</a>
          </li>
          <li className="mobile-menu-link">
            <a href="/">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <div className="logo">
    //         <i className="fas fa-parking"></i> <h1>Padrone</h1>
    //       </div>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <div className="links-container">
    //         <ul className="nav-links">
    //           <a href="/">
    //             <li className="nav-link">Profile</li>
    //           </a>
    //           <a href="/">
    //             <li className="nav-link">Settings</li>
    //           </a>
    //         </ul>
    //       </div>
    //     </Navbar.Collapse>
    //     <div className="btn-container">
    //       <a href="/">
    //         <button className="btn-logout" onClick={logout}>
    //           Logout <i className="fas fa-sign-out-alt"></i>
    //         </button>
    //       </a>
    //     </div>
    //   </Container>
    // </Navbar>
  );
};

export default Dashboard;
