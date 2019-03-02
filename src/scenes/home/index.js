import React, { Component } from 'react';
import Header from '../../components/header'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './style.scss';

class App extends Component {
  items = [1, 2, 3, 4, 5];
  responsive = {
    0: { items: 1 },
    600: { items:4 },
    1024: { items: 5 },
  };
  galleryItem = (item, i) => (
    <div key={`key-${i}`} className="item-carousel"><h2>{item}</h2></div>
  )
  
  thumbItem = (item, i) => (
    <li key={i} onClick={() => this.Carousel._onDotClick(i)}>Thumb {item}</li>
  )
       

  render() {
    const items = this.items.map(this.galleryItem)
    return (
      <div className="App">
        <Header className="App-header" />
        <button onClick={() => this.Carousel._slidePrev()}>Prev button</button>
        <button onClick={() => this.Carousel._slideNext()}>Next button</button>
        <AliceCarousel
          items={items}
          dotsDisabled={true}
          buttonsDisabled={true}
          responsive={this.responsive}
          ref={ el => this.Carousel = el }
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </div>
    );
  }
}

export default App;
