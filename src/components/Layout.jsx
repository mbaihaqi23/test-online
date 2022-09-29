import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";



const AppLayouts = (props) => {
  const [cookies, removeCookie] = useCookies([]);


  const logout = () => {
    removeCookie(["accessToken"]);
    removeCookie(["email"]);
  };

  return (
    <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <li style={{ display: cookies.accessToken ? "" : "none" }} className="navbar-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
         </div> 
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <li style={{ display: cookies.accessToken ? "none" : "" }} className="button is-primary">
              <Link to="/registration"><strong>Registration</strong></Link >
              </li>
              <li style={{ display: cookies.accessToken ? "none" : "" }} className="button is-light">
                <Link to="/login"><strong>Login</strong></Link>
              </li>
              <li style={{ display: cookies.accessToken ? "" : "none" }} className="button is-danger">
                <Link to="/" onClick={logout}>Logout</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>  
    <section>{props.children}</section>
    <footer>
        <div className="footer ptb3">Footer</div>
      </footer>
    </div> 

  );
};

export default AppLayouts;