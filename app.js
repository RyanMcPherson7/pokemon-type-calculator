const { buildScoreMap } = require('./src/build-score-map');
const { sortScoreMap } = require('./src/sort-score-map');

let map = new Map();
buildScoreMap(map);

setTimeout(() => {
  sortScoreMap(map);
}, 4000);
