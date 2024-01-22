import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

function App({
  captions, image, images, note, source, title
}) {
  const appRef = useRef();
  const mapRef = useRef();
  const mapContRef = useRef();
  const [offset, setOffset] = useState(0);
  const [mapOffset, setMapOffset] = useState(0);
  const [imageId, setImageId] = useState(0);
  const isVisible = useIsVisible(appRef);

  const preloadImage = (imageUrl) => {
    const img = new Image();
    img.src = `./assets/img/${imageUrl}`;
  };

  useEffect(() => {
    const onScroll = () => {
      if (isVisible) {
        setOffset(window.pageYOffset);
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isVisible]);

  useEffect(() => {
    images.forEach(el => {
      preloadImage(`${el}.png`);
    });
  }, [images]);

  useEffect(() => {
    const mapContY = mapContRef.current?.getBoundingClientRect().y || window.innerHeight;
    if (imageId !== Math.round(Math.abs(mapContY / (window.innerHeight * 1.5)))) {
      setImageId(Math.round(Math.abs(mapContY / (window.innerHeight * 1.5))));
    }
  }, [imageId, offset]);

  useEffect(() => {
    const mapContY = mapContRef.current?.getBoundingClientRect().y || window.innerHeight;
    const mapContHeight = mapContRef.current?.getBoundingClientRect().height || 0;
    const mapHeight = mapRef.current?.getBoundingClientRect().height || 0;

    if (mapRef.current) {
      if (offset < (window.pageYOffset + mapContY)) { // Beginning
        mapRef.current.classList.remove('fixed');
        mapRef.current.classList.add('absolute');
        if (mapRef.current.querySelector('img').src !== `${window.location.href}assets/img/${images[0]}.png`) {
          mapRef.current.querySelector('img').src = `./assets/img/${images[0]}.png`;
        }
        setMapOffset(0);
      } else if (offset > (window.pageYOffset + mapContY + mapContHeight - mapHeight)) { // End
        mapRef.current.classList.remove('fixed');
        mapRef.current.classList.add('absolute');
        if (mapRef.current.querySelector('img').src !== `${window.location.href}assets/img/${images[images.length - 1]}.png`) {
          mapRef.current.querySelector('img').src = `./assets/img/${images[images.length - 1]}.png`;
        }
        setMapOffset(false);
      } else { // Middle
        mapRef.current.classList.add('fixed');
        mapRef.current.classList.remove('absolute');
        if (mapRef.current.querySelector('img').src !== `${window.location.href}assets/img/${images[imageId]}.png`) {
          mapRef.current.querySelector('img').src = `./assets/img/${images[imageId]}.png`;
        }
        setMapOffset(0);
      }
    }
  }, [image, imageId, images, offset]);

  return (
    <div className="app" ref={appRef}>
      <div className="scroller">
        <div className="map_container" ref={mapContRef}>
          <div className="background_map" ref={mapRef} style={(mapOffset !== false) ? { top: mapOffset } : { bottom: '0' }}>
            <div className="content_container">
              <h4>{title}</h4>
              <img src={`./assets/img/${images[0]}.png`} alt="" />
              {
                source && (
                <h6>
                  <em>Source:</em>
                  {' '}
                  {source}
                </h6>
                )
              }
              {
                note && (
                <h6>
                  <em>Note:</em>
                  {' '}
                  {note}
                </h6>
                )
              }
            </div>
          </div>
          {
            captions && captions.map(caption => (
              <div className="date_container" key={caption}>
                <div className="date">{caption}</div>
              </div>
            ))
          }

        </div>
      </div>

      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

App.propTypes = {
  captions: PropTypes.instanceOf(Array).isRequired,
  image: PropTypes.string.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  note: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string
};

App.defaultProps = {
  source: false,
  note: false,
  title: ''
};

export default App;
