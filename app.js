const {buildTypeDataSets} = require('./src/build-type-data-sets')

let dmgMap = new Map();
let combos = [];
buildTypeDataSets(dmgMap, combos);
