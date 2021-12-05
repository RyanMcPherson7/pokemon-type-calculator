const { buildAndSortScoreMap } = require('./src/build-and-sort-score-map');

const multiplier = {
    dubDmgFromMult: 1,
    dubDmgToMult: 1,
    halfDmgFromMult: 1,
    halfDmgToMult: 1,
    noDmgFromMult: 2,
    noDmgToMult: 2,
}

let map = new Map();
buildAndSortScoreMap(map, multiplier);
