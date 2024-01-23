import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from 'uuid';

// https://www.npmjs.com/package/chroma-js
import chroma from 'chroma-js';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';
import CSVtoJSON from './helpers/CSVtoJSON.js';

// const appID = '#app-root-2024-palestine_rapid_assessment';

function App() {
  const f_0_gaza = chroma.scale(['#fff', '#ab1d37']).nodata('#fff').domain([0, 625]); // oct
  const f_1_gaza = chroma.scale(['#fff', '#ab1d37']).nodata('#fff').domain([0, 625]); // nov 23
  const f_2_gaza = chroma.scale(['#fff', '#ab1d37']).nodata('#fff').domain([0, 625]); // nov 30

  const [dataGaza, setDataGaza] = useState(false);

  useEffect(() => {
    fetch((window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-palestine_rapid_assessment/assets/data/2024-palestine_rapid_assessment - data_damage_gaza.csv' : './assets/data/2024-palestine_rapid_assessment - data_damage_gaza.csv')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then(body => setDataGaza(CSVtoJSON(body)));
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="app">
      <h3 className="text_center">Gaza Damage</h3>
      <div className="damage_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['23nov']} style={{ backgroundColor: f_0_gaza(el['23nov']) }} key={uuidv4()} />)
        }
      </div>
      <div className="damage_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['30nov']} style={{ backgroundColor: f_1_gaza(el['30nov']) }} key={uuidv4()} />)
        }
      </div>
      <div className="damage_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['28dec']} style={{ backgroundColor: f_2_gaza(el['28dec']) }} key={uuidv4()} />)
        }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
