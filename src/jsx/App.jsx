import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2024-palestine_rapid_assessment';

function App() {
  const appRef = useRef();
  const mapRef = useRef();
  const mapContRef = useRef();
  const [offset, setOffset] = useState(0);
  const [mapOffset, setMapOffset] = useState(0);

  const preloadImage = (imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    for (let i = 1; i <= 12; i++) {
      preloadImage(`${i}.jpg`);
    }
  }, []);

  useEffect(() => {
    const mapContY = mapContRef.current?.getBoundingClientRect().y || window.innerHeight;
    const mapContHeight = mapContRef.current?.getBoundingClientRect().height || 0;
    const mapHeight = mapRef.current?.getBoundingClientRect().height || 0;

    if (mapRef.current) {
      if (offset < (window.pageYOffset + mapContY)) { // Beginning
        console.log('begin');
        mapRef.current.classList.remove('fixed');
        mapRef.current.classList.add('absolute');
        setMapOffset(0);
      } else if (offset > (window.pageYOffset + mapContY + mapContHeight - mapHeight)) { // End
        console.log('end');
        mapRef.current.classList.remove('fixed');
        mapRef.current.classList.add('absolute');
        setMapOffset(false);
      } else {
        mapRef.current.classList.add('fixed');
        mapRef.current.classList.remove('absolute');
        mapRef.current.style.backgroundImage = `url('./assets/img/expenditure-losses_${Math.round(Math.abs(mapContY / window.innerHeight))}.png')`;
        console.log('Middle');
        setMapOffset(0);
      }
    }
  }, [offset]);

  return (
    <div className="app" ref={appRef}>
      <div className="map_container" ref={mapContRef}>
        <div className="background_map" ref={mapRef} style={(mapOffset !== false) ? { top: mapOffset } : { bottom: '0' }} />
        <div className="date_container">
          <div className="date">Before the ceace fire</div>
        </div>
        <div className="date_container">
          <div className="date">Cease fire</div>
        </div>
        <div className="date_container">
          <div className="date">In total</div>
        </div>
      </div>

      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
