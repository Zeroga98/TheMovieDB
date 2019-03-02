import React, { Component } from 'react';
import Header from '../../components/header'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  items = [
    {
      Title: "The forest (2017)",
      Category: "Action, Drama",
      ranked: "8/10",
      img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
    },
    {
      Title: "The forest (2017)",
      Category: "Action, Drama",
      ranked: "8/10",
      img: "http://es.web.img3.acsta.net/r_1920_1080/pictures/16/11/14/17/25/184425.jpg"
    },
    {
      Title: "The forest (2017)",
      Category: "Action, Drama",
      ranked: "8/10",
      img: "http://es.web.img2.acsta.net/r_640_600/b_1_d6d6d6/pictures/15/02/16/16/28/231403.jpg"
    },
    {
      Title: "The forest (2017)",
      Category: "Action, Drama",
      ranked: "8/10",
      img: "https://http2.mlstatic.com/interestelar-interstellar-christopher-nolan-pelicula-dvd-D_NQ_NP_583225-MLM25410651137_032017-F.jpg"
    },
    {
      Title: "The forest (2017)",
      Category: "Action, Drama",
      ranked: "8/10",
      img: "https://i.blogs.es/89d7af/inception-poster/450_1000.jpg"
    },
  ];

  responsive = {
    0: { items: 1 },
    600: { items: 4 },
    1024: { items: 5 },
  };
  galleryItem = (item, i) => (
    <div key={`key-${i}`} className="item-carousel" >
      <div className="movie-poster">
        <img src={item.img} />
      </div>
      <div className="movie-details">
        <span>{item.ranked}</span>
        <h2>{item.Title}</h2>
        <span>{item.Category}</span>
      </div>
    </div>
  )

  thumbItem = (item, i) => (
    <li key={i} onClick={() => this.Carousel._onDotClick(i)}>Thumb {item}</li>
  )


  render() {
    const items = this.items.map(this.galleryItem)
    return (
      <div className="App">
        <Header className="App-header" />
        <div className="carousel-movie">
          <AliceCarousel
            items={items}
            dotsDisabled={true}
            buttonsDisabled={true}
            responsive={this.responsive}
            ref={el => this.Carousel = el}
          />
          <button className="btn-angle btn-angle--left" onClick={() => this.Carousel._slidePrev()}><FontAwesomeIcon icon="angle-left" /></button>
          <button className="btn-angle btn-angle--right" onClick={() => this.Carousel._slideNext()}><FontAwesomeIcon icon="angle-right" /></button>
        </div>
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

export default App;
