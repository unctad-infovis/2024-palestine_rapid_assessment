import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from 'uuid';

// https://www.npmjs.com/package/chroma-js
import chroma from 'chroma-js';

function App({
  captions, image, images, legend, note, source, subtitle, title
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

  const f_damage = chroma.scale(['#fff', '#960000']).nodata('#fff').domain([0, 150]);
  const f_ntl = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').domain([0, 100]);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    images.forEach(el => {
      preloadImage(`${el}.png`);
    });
  }, [images]);

  useEffect(() => {
    const mapContY = mapContRef.current?.getBoundingClientRect().y || window.innerHeight;
    setImageId(Math.min(Math.round(Math.abs(mapContY / (window.innerHeight * 1.5))), images.length - 1));
  }, [images.length, offset]);

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
        if (isVisible) {
          mapRef.current.classList.add('fixed');
          mapRef.current.classList.remove('absolute');
          if (mapRef.current.querySelector('img').src !== `${window.location.href}assets/img/${images[imageId]}.png`) {
            mapRef.current.querySelector('img').src = `./assets/img/${images[imageId]}.png`;
          }
        } else {
          mapRef.current.classList.remove('fixed');
          mapRef.current.classList.add('absolute');
        }
        setMapOffset(0);
      }
    }
  }, [image, imageId, images, isVisible, offset]);

  return (
    <div className="app" ref={appRef}>
      <div className="scroller">
        <div className="map_container" ref={mapContRef}>
          <div className="background_map" ref={mapRef} style={(mapOffset !== false) ? { top: mapOffset } : { bottom: '0' }}>
            <div className="content_container">
              <h4>{title}</h4>
              <h5>{subtitle[imageId]}</h5>
              <div className="image_container">
                {
                  legend !== '' && (
                    <div className="legend_container">
                      <div className="legend_text">Less</div>
                      {
                        legend === 'damage' ? new Array(150).fill().map((el, i) => <div className="legend_item" key={uuidv4()} style={{ backgroundColor: f_damage(i) }} />) : new Array(150).fill().map((el, i) => <div className="legend_item" key={uuidv4()} style={{ backgroundColor: f_ntl(i) }} />)
                      }
                      <div className="legend_text">More</div>
                    </div>
                  )
                }
                <img src={`./assets/img/${images[0]}.png`} alt="" />
              </div>
            </div>
          </div>
          {
            captions && captions.map(caption => (
              <div className="meta_container" key={caption.text}>
                <div className="caption">
                  <div className="text">{caption.text}</div>
                  <div className="date_title">{caption.date_title}</div>
                  <div className="date">{caption.date}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="content_container">
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
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

App.propTypes = {
  captions: PropTypes.instanceOf(Array).isRequired,
  image: PropTypes.string.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  legend: PropTypes.string,
  note: PropTypes.string,
  source: PropTypes.string,
  subtitle: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string
};

App.defaultProps = {
  source: false,
  note: false,
  legend: '',
  title: ''
};

export default App;
