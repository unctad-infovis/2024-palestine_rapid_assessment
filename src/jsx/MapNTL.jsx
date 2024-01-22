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
  // const f_0_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([2, 4.5, 6, 7, 8, 9.3, 13.2, 37.9, 823]);
  // const f_1_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([7, 8.5, 9.7, 15, 17.5, 19.5, 22.9, 45.3, 954]);
  // const f_2_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([14, 20, 33, 38.9, 43.5, 47.1, 54.3, 82.9, 974]);
  // const f_3_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([33, 38, 45, 60, 77, 85, 93, 1240]);

  // const f_0_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([2, 4.5, 6, 7, 8, 9.3, 13.2, 37.9, 823]);
  // const f_1_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([7, 8.5, 9.7, 15, 17.5, 19.5, 22.9, 45.3, 954]);
  // const f_2_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([14, 20, 33, 38.9, 43.5, 47.1, 54.3, 82.9, 974]);
  // const f_3_all = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).classes([33, 38, 45, 60, 77, 85, 93, 1240]);

  // const f_0_gaza = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).domain([81, 80, 261]);
  // const f_1_gaza = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).domain([11, 80, 439]);
  // const f_2_gaza = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).domain([25, 80, 446]);
  // const f_3_gaza = chroma.scale(['rgba(0, 0, 0, 0.8)', '#f8e66b']).domain([53, 80, 345]);

  const f_0_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([81, 103.5041667, 114, 135.4541667, 439]); // oct
  const f_1_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([11, 15, 17, 19.75, 439]); // nov 23
  const f_2_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([25, 37, 41.5, 48.66666667, 439]); // nov 30
  const f_3_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([53, 69, 73.36111111, 80, 439]); // dec29

  // const [dataAll, setDataAll] = useState(false);
  const [dataGaza, setDataGaza] = useState(false);

  useEffect(() => {
    // fetch((window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-palestine_rapid_assessment/assets/data/2024-palestine_rapid_assessment - data_ntl_all.csv' : './assets/data/2024-palestine_rapid_assessment - data_ntl_all.csv')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.text();
    //   })
    //   .then(body => setDataAll(CSVtoJSON(body)));
    fetch((window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-palestine_rapid_assessment/assets/data/2024-palestine_rapid_assessment - data_ntl_gaza.csv' : './assets/data/2024-palestine_rapid_assessment - data_ntl_gaza.csv')
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
      {/* <h3>All</h3>
      <div className="ntl_map">
        {
          dataAll && dataAll.map((el) => <div className="square" title={el['6oct']} style={{ backgroundColor: f_0_all(el['6oct']) }} key={uuidv4()} />)
        }
      </div>
      <div className="ntl_map">
        {
          dataAll && dataAll.map((el) => <div className="square" title={el['23nov']} style={{ backgroundColor: f_1_all(el['23nov']) }} key={uuidv4()} />)
        }
      </div>
      <div className="ntl_map">
        {
          dataAll && dataAll.map((el) => <div className="square" title={el['30nov']} style={{ backgroundColor: f_2_all(el['30nov']) }} key={uuidv4()} />)
        }
      </div>
      <div className="ntl_map">
        {
          dataAll && dataAll.map((el) => <div className="square" title={el['28dec']} style={{ backgroundColor: f_3_all(el['28dec']) }} key={uuidv4()} />)
        }
      </div> */}
      <h3>Gaza NTL</h3>
      <div className="ntl_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['6oct']} style={{ backgroundColor: f_0_gaza(el['6oct']) }} key={uuidv4()} />)
        }
      </div>
      <div className="ntl_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['23nov']} style={{ backgroundColor: f_1_gaza(el['23nov']) }} key={uuidv4()} />)
        }
      </div>
      <div className="ntl_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['30nov']} style={{ backgroundColor: f_2_gaza(el['30nov']) }} key={uuidv4()} />)
        }
      </div>
      <div className="ntl_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['28dec']} style={{ backgroundColor: f_3_gaza(el['28dec']) }} key={uuidv4()} />)
        }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
