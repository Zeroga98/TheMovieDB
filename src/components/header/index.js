import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light header-movie">
        <div className="collapse navbar-collapse justify-content-center"  >
          <Link to="/" className="logo">
            <img src="https://cdn.onlinewebfonts.com/svg/img_524690.png" />
            <span>
              TheMovieDb
          </span>
          </Link>

          {/*    <form className="form-inline my-2 my-lg-0 ">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" >
              Buscar
          </button>
          </form> */}
          {/*    <div>
            Bienvenido
          </div> */}
        </div>
      </nav>
    );
  }
};


export default Header;