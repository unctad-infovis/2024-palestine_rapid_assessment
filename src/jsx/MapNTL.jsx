import React, { useState, useEffect } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from 'uuid';

// https://www.npmjs.com/package/chroma-js
import chroma from 'chroma-js';

// Load helpers.
import CSVtoJSON from './helpers/CSVtoJSON.js';

function App() {
  const f_0_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([11, 103.5041667, 114, 135.4541667, 881]); // oct
  const f_1_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([11, 15, 17, 19.75, 881]); // 23 November
  const f_2_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([11, 37, 41.5, 48.66666667, 881]); // 30 November
  const f_3_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([11, 69, 73.36111111, 80, 881]); // 28 December
  const f_4_gaza = chroma.scale(['rgba(0, 0, 0, 0.7)', '#f8e66b']).nodata('#fff').classes([11, 25.5, 28, 33.3, 881]); // 21 May

  const [dataGaza, setDataGaza] = useState(false);

  useEffect(() => {
    fetch(`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2024-palestine_rapid_assessment' : '.'}/assets/data/2024-palestine_rapid_assessment - data_ntl_gaza.csv`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then(body => setDataGaza(CSVtoJSON(body)));
  }, []);

  return (
    <div className="app">
      <h3 className="text_center">Gaza NTL</h3>
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
      <div className="ntl_map">
        {
          dataGaza && dataGaza.map((el) => <div className="square" title={el['21may']} style={{ backgroundColor: f_4_gaza(el['21may']) }} key={uuidv4()} />)
        }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
