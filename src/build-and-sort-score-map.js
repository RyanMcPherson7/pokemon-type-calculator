const { buildScoreMap } = require('./build-score-map');

exports.buildAndSortScoreMap = async (scoreMap) => {
  await buildScoreMap(scoreMap);

  const size = scoreMap.size;
  let sortedScoreList = [];

  for (let i = 0; i < size; i++) {
    let max = Number.NEGATIVE_INFINITY;
    let maxType = '';

    scoreMap.forEach((score, type) => {
      if (score > max) {
        max = score;
        maxType = type;
      }
    });

    sortedScoreList.push(`${maxType} (Score: ${max})`);
    scoreMap.delete(maxType);
  }

  sortedScoreList.forEach((i) => {
    console.log(i);
  });
};
