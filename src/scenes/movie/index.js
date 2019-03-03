import React, { Component } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getMovie, getRecommendationsMovies } from '../../services/movie/actions';
import { connect } from 'react-redux';
import { genres, responsiveSimilary } from '../../constans/home';
import moment from 'moment';
import 'moment/locale/es';
import AliceCarousel from 'react-alice-carousel';
import Loader from 'react-loaders'

class movie extends Component {

  constructor(props) {
    super(props);
    this.props.getMovie(this.props.match.params.id);
    this.props.getRecommendationsMovies(this.props.match.params.id);
    moment.locale('es');
    this.state = {
      load: true
    };
  }
  found = (item) => {
    let genre = item.map(data => {
      genre = genres.find(function (element) {
        return element.id == data.id;
      })
      return genre;
    })
    return genre;
  };
  foundRe = (item) => {
    let genre = item.map(data => {
      genre = genres.find(function (element) {
        return element.id == data;
      })
      return genre;
    })
    return genre;
  };
  load = true;
  render() {
    const { movies } = this.props;
    return (
      <div>
        {setTimeout(() => {
          this.setState({ load: false });
        }, 1000) && this.state.load &&
          <div className="d-flex justify-content-center " style={{ margin: '8em' }}>
            <Loader type="ball-grid-pulse"/>
          </div>
        }
        {!this.state.load && movies != undefined && movies.movie != undefined &&
          <div>
            <div className="banner">
              <div className="d-flex banner-img">
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movies.movie.backdrop_path}`} />
              </div>
              <div className="info">
                <div className="d-flex flex-column info-list">
                  <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movies.movie.backdrop_path}`} />
                  <span style={{ fontSize: '22px' }}>Información:</span>
                  <span>Año: {moment(movies.movie.release_date).format('LL')}</span>
                  <span>Generos: {this.found(movies.movie.genres).map(data => {
                    return (data.name + ", ")
                  })} </span>
                  <span>{movies.movie.tagline}</span>
                </div>
                <div className="detail d-flex flex-column mt-5 ml-4">
                  <span className="title">{movies.movie.title}</span>
                  <span className="genered">{this.found(movies.movie.genres).map(data => {
                    return (data.name + ", ")
                  })}</span>
                  <span className="ranked">{movies.movie.vote_average}</span>
                </div>
              </div>
            </div>
            <div className="container movie-detail ">
              <div className="title">
                <FontAwesomeIcon icon="book-open" />
                <span>Descripción</span>
              </div>
              <div>
                <p>{movies.movie.overview}</p>
              </div>
              <div className="section-category ">
                <div className="category-title d-flex align-items-center mb-4">
                  <div>
                    <FontAwesomeIcon color="#28a745" icon="film" />
                    <span>Similares</span>
                  </div>
                </div>{!this.state.load && movies.recommendationsMovies != undefined && movies.recommendationsMovies.results != undefined &&
                  <div className="carousel-movie">
                    <AliceCarousel
                      dotsDisabled={true}
                      buttonsDisabled={true}
                      responsive={responsiveSimilary}
                      ref={el => this.Carousel = el}>
                      {movies.recommendationsMovies.results.map(item => {
                        return (
                          <div key={`key-${item.id}`} className="item-carousel" onClick={() => {
                            this.setState({ load: true });
                            this.props.history.push(`/movie/${item.id}`)
                            this.props.getMovie(item.id);
                            this.props.getRecommendationsMovies(item.id);
                            setTimeout(() => {
                              this.setState({ load: false });
                            }, 1000)
                          }}>
                            <div className="movie-poster">
                              <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} />
                            </div>
                            <div className="movie-details">
                              <span>{item.vote_average}/10</span>
                              <h2>{item.title}</h2>
                              <span>{this.foundRe(item.genre_ids).map(data => {
                                return (data.name + ', ')
                              })}</span>
                            </div>
                          </div>
                        )
                      })
                      }
                    </AliceCarousel>
                    <button className="btn-angle btn-angle--left" onClick={() => this.Carousel._slidePrev()}><FontAwesomeIcon icon="angle-left" /></button>
                    <button className="btn-angle btn-angle--right" onClick={() => this.Carousel._slideNext()}><FontAwesomeIcon icon="angle-right" /></button>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}
const mapDispatchToProps = {
  getMovie: getMovie,
  getRecommendationsMovies: getRecommendationsMovies
};

movie = connect(
  mapStateToProps,
  mapDispatchToProps,
)(movie);

export default movie;
