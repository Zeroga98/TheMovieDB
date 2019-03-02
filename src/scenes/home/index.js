import React, { Component } from 'react';
import Header from '../../components/header'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { getPupularMovies } from '../../services/movie/actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getPupularMovies();
  }
  responsive = {
    0: { items: 1 },
    600: { items: 4 },
    1024: { items: 5 },
  };
  render() {
    const { movies } = this.props;
    return (
      <div className="App">
        <Header className="App-header" />
        {movies.movies != undefined && movies.movies.results != undefined &&
          <div className="carousel-movie">
            <AliceCarousel
              dotsDisabled={true}
              buttonsDisabled={true}
              responsive={this.responsive}
              ref={el => this.Carousel = el}>
              {movies.movies.results.map(item => {
                return (
                  <div key={`key-${item.id}`} className="item-carousel" >
                    <div className="movie-poster">
                      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} />
                    </div>
                    <div className="movie-details">
                      <span>{item.vote_average}/10</span>
                      <h2>{item.title}</h2>
                      <span>{item.Category}</span>
                    </div>
                  </div>
                )
              })
              }
            </AliceCarousel>
            <button className="btn-angle btn-angle--left" onClick={() => this.Carousel._slidePrev()}><FontAwesomeIcon icon="angle-left" /></button>
            <button className="btn-angle btn-angle--right" onClick={() => this.Carousel._slideNext()}><FontAwesomeIcon icon="angle-right" /></button>
          </div>}

        <div className="container">
          <div className="section-category mt-4">
            <div className="category-title">
              <FontAwesomeIcon color="#28a745" icon="film" />
              <span>Categorias</span>
            </div>
            <div className="group-bagde">
              <div className="bagde">
                Todos
              </div>
              <div className="bagde">
                Acción
              </div>
              <div className="bagde">
                Fantasia
              </div>
            </div>
            <div className="row">
              <div className="col-4 movie">
                <div className="thumbail">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" />
                </div>
                <div className="detail">
                  <span className="title">Avengers Infinity war</span>
                  <span className="category">Acción, Fantasia</span>
                  <FontAwesomeIcon color="#ffc000" icon="star" />
                  <span className="ranked">8,4</span>
                  <p>
                    Lorem Ipsum is simply dummy te xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-4 movie">
                <div className="thumbail">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" />
                </div>
                <div className="detail">
                  <span className="title">Avengers Infinity war</span>
                  <span className="category">Acción, Fantasia</span>
                  <FontAwesomeIcon color="#ffc000" icon="star" />
                  <span className="ranked">8,4</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className="col-4 movie">
                <div className="thumbail">
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg" />
                </div>
                <div className="detail">
                  <span className="title">Avengers Infinity war</span>
                  <span className="category">Acción, Fantasia</span>
                  <FontAwesomeIcon color="#ffc000" icon="star" />
                  <span className="ranked">8,4</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
    movies: state.movies,
  }
}
const mapDispatchToProps = {
  getPupularMovies: getPupularMovies
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


export default App;
