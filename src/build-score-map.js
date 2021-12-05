const { buildTypeDataSets } = require('./build-type-data-sets');
const { calculateScore } = require('./calculate-score')

exports.buildScoreMap = async (scoreMap) => {
  let dmgMap = new Map();
  let combos = [];
  await buildTypeDataSets(dmgMap, combos);

  // calc score for each combo
  combos.forEach((combo) => {
    // pure type
    if (combo.length === 1) {
      const [type1] = combo;
      const score = calculateScore(dmgMap, combo);
      scoreMap.set(type1, score);
    }
    // duel type
    else {
      const [type1, type2] = combo;
      const score = calculateScore(dmgMap, combo);
      scoreMap.set(`${type1} | ${type2}`, score);
    }
  });
};