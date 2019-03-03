import React, { Component } from 'react';
import Header from '../../components/header'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { getPupularMovies, getDiscoverMovies } from '../../services/movie/actions';
import Select from 'react-select';
import { genres, responsive } from '../../constans/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getPupularMovies();
    this.props.getDiscoverMovies("");
  }
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.getDiscoverMovies(selectedOption.value)
    console.log(`Option selected:`, selectedOption);
  }

  found = (item) => {
    let genre = item.map(data => {
      genre = genres.find(function (element) {
        return element.id == data;
      })
      return genre;
    })
    return genre;
  };
  selectecdValue = (genres) => {
    let options = [];
    options = genres.map(data => {
      let option = { "label": data.name, "value": data.id };
      return option;
    })
    return options;
  }
  render() {
    const { movies } = this.props;
    const scaryAnimals = [
      { label: "Alligators", value: 1 },
      { label: "Crocodiles", value: 2 },
      { label: "Sharks", value: 3 },
      { label: "Small crocodiles", value: 4 },
      { label: "Smallest crocodiles", value: 5 },
      { label: "Snakes", value: 6 },
    ];
    return (
      <div className="App">
        <Header className="App-header" />
        {movies.movies != undefined && movies.movies.results != undefined &&
          <div className="carousel-movie">
            <AliceCarousel
              dotsDisabled={true}
              buttonsDisabled={true}
              responsive={responsive}
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
                      <span>{this.found(item.genre_ids).map(data => {
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
          </div>}

        <div className="container">
          <div className="section-category ">
            <div className="category-title d-flex align-items-center mb-4">
              <div>
                <FontAwesomeIcon color="#28a745" icon="film" />
                <span>Categorias</span>
              </div>
              <Select className="selectedGenre" value={this.selectedOption} onChange={this.handleChange} options={this.selectecdValue(genres)} placeholder="Todas" />
            </div>
            <div className="row">
              {movies.moviesDiscover != undefined && movies.moviesDiscover.results != undefined &&
                movies.moviesDiscover.results.map(item => {
                  return (
                    <div key={`key-${item.id}`} className="col-4 movie mb-2">
                      <div className="thumbail">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} />
                      </div>
                      <div className="detail">
                        <span className="title">{item.title}</span>
                        <span className="category">{this.found(item.genre_ids).map(data => {
                          return (data.name + ', ')
                        })}</span>
                        <FontAwesomeIcon color="#ffc000" icon="star" />
                        <span className="ranked">{item.vote_average}</span>
                        <p>
                          {item.overview}
                        </p>
                      </div>
                    </div>
                  )
                }
                )
              }
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
    moviesDiscover: state.moviesDiscover
  }
}
const mapDispatchToProps = {
  getPupularMovies: getPupularMovies,
  getDiscoverMovies: getDiscoverMovies
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


export default App;
