import React, { /* useState, */useEffect } from 'react';
import PropTypes from 'prop-types';

function App({ chart_id }) {
  useEffect(() => {
    const container = document.querySelector(`.chart_container_${chart_id} .chart`);
    const script = document.createElement('script');

    script.setAttribute('src', `https://datawrapper.dwcdn.net/${chart_id}/embed.js`);
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, [chart_id]);

  return (
    <div className={`chart_container_${chart_id}`}>
      <div className="chart" />
      <noscript><img src={`https://datawrapper.dwcdn.net/${chart_id}/full.png`} alt="" /></noscript>
    </div>
  );
}

App.propTypes = {
  chart_id: PropTypes.string.isRequired
};

App.defaultProps = {
};

export default App;
