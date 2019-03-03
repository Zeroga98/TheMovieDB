import React, { Component } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getMovie } from '../../services/movie/actions';
import { connect } from 'react-redux';

class movie extends Component {

  constructor(props) {
    super(props);
    this.props.getMovie(238);
  }

  render() {
    return (
      <div>
        <div className="banner">
          <div className="d-flex banner-img">
            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/iaiy3tg9QVkDpObm1IGqmbC9A5C.jpg" />
          </div>
          <div className="info">
            <div className="d-flex flex-column info-list">
              <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/iaiy3tg9QVkDpObm1IGqmbC9A5C.jpg" />
              <span style={{ fontSize: '22px' }}>Información:</span>
              <span>Año: 2018</span>
              <span>Generos: Acción, Drama</span>
              <span>Una oferta que no podrás rechazar</span>
            </div>
            <div className="detail d-flex flex-column mt-5 ml-4">
              <span className="title">Your name</span>
              <span className="genered">Accion, Drama</span>
              <span className="ranked">9</span>
            </div>
          </div>
        </div>
        <div className="container movie-detail ">
          <div className="title">
            <FontAwesomeIcon icon="book-open" />
            <span>Descripción</span>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
          <div className="section-category ">
            <div className="category-title d-flex align-items-center mb-4">
              <div>
                <FontAwesomeIcon color="#28a745" icon="film" />
                <span>Similares</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-md-12 movie mb-2">
                <div className="thumbail">
                  <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/iaiy3tg9QVkDpObm1IGqmbC9A5C.jpg" />
                </div>
                <div className="detail">
                  <span className="title">Your name</span>
                  <span className="category">
                    Animación, Ficción
                  </span>
                  <FontAwesomeIcon color="#ffc000" icon="star" />
                  <span className="ranked">9</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  }
}
const mapDispatchToProps = {
  getMovie: getMovie,
};

movie = connect(
  mapStateToProps,
  mapDispatchToProps,
)(movie);

export default movie;
