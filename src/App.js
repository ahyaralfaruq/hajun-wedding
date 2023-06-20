import React from 'react';
import {
  SectionBackground,
  SectionQuotes,
  SectionGroom,
  SectionLocations,
  SectionGift,
  SectionPhotos,
} from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* section background wedding invitation */}
      <SectionBackground />
      {/* section pearl words */}
      <SectionQuotes />
      {/* section groom and bride */}
      <SectionGroom />
      {/* section wedding location */}
      <SectionLocations />
      {/* section photos */}
      {/* section send gift */}
    </div>
  );
}

export default App;
