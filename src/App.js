import React, { Suspense, lazy } from 'react';
// import {
//   SectionBackground,
//   SectionQuotes,
//   SectionGroom,
//   SectionLocations,
//   SectionGift,
//   SectionPhotos,
// } from './components';

import './App.css';

const SectionBackground = lazy(() => import("./components/SectionBackground"))
const SectionQuotes = lazy(() => import("./components/SectionQuotes"))
const SectionGroom = lazy(() => import("./components/SectionGroom"))
const SectionLocations = lazy(() => import("./components/SectionLocations"))
const SectionGift = lazy(() => import("./components/SectionGift"))
const SectionPhotos = lazy(() => import("./components/SectionPhotos"))

function App() {
  return (
    <div className="App">
      {/* section background wedding invitation */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionBackground />
      </Suspense>
      {/* section pearl words */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionQuotes />
      </Suspense>
      {/* section groom and bride */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionGroom />
      </Suspense>
      {/* section wedding location */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionLocations />
      </Suspense>
      {/* section photos */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionPhotos />
      </Suspense>
      {/* section send gift */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionGift />
      </Suspense>
    </div>
  );
}

export default App;
