import React from 'react';
import {
  SectionBackground,
  SectionQuotes,
  SectionGroom,
  SectionLocations,
  // SectionGift,
  SectionPhotos,
  SectionCountdown,
  SectionSong,
} from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <SectionSong />
      {/* section background wedding invitation */}
      <SectionBackground />

      <SectionCountdown />
      {/* section pearl words */}
      <SectionQuotes />
      {/* section groom and bride */}
      <SectionGroom />
      {/* section wedding location */}
      <SectionLocations />
      {/* section photos */}
      <SectionPhotos />

      {/* section send gift */}
      {/* <SectionGift /> */}
    </div>
  );
}

export default App;
