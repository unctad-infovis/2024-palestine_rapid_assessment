import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';
// import MapNTL from './jsx/MapNTL.jsx';
// import MapDamage from './jsx/MapDamage.jsx';

// const container_map_ntl = document.getElementById('app-root-2024-palestine_rapid_assessment_map_ntl');
// if (container_map_ntl) {
//   const root_map_ntl = createRoot(container_map_ntl);
//   root_map_ntl.render(<MapNTL />);
// }

// const container_map_damage = document.getElementById('app-root-2024-palestine_rapid_assessment_map_damage');
// if (container_map_damage) {
//   const root_map_damage = createRoot(container_map_damage);
//   root_map_damage.render(<MapDamage />);
// }

const container = document.getElementById('app-root-2024-palestine_rapid_assessment');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
