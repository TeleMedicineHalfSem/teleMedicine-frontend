import React from 'react'
import "./App.css";
import review from './util/review';
import CarouselReview from './component/CarouselReview'
function App() {
  return (
    <div className="App">
      {
        // App.js should be used only for routing and redirecting to different pages..
        // Do not write any code here..
        <CarouselReview review={review}/>
      }
    </div>
  );
}

export default App;
