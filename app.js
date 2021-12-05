const { getTypeData } = require('./src/get-type-data');

// getting names
const buildTypeDataSets = async (typeList, typeDamageRelationMap) => {
  for (let i = 1; i <= 18; i++) {
    const typeData = await getTypeData(i);
    typeList.push(typeData.name);
    typeDamageRelationMap.set(typeData.name, typeData.damage_relations);
  }
};

const buildTypeCombinations = async (typeList, typeDamageRelationMap, typeCombinations) => {
  await buildTypeDataSets(typeList, typeDamageRelationMap);

  for (let i = 0; i < 18; i++) {
    // pure types
    typeCombinations.push([typeList[i]]);

    // duel types
    for (let j = i + 1; j < 18; j++) {
      typeCombinations.push([typeList[i], typeList[j]]);
    }
  }

  typeCombinations.forEach((item) => {
    console.log(item);
  });
  console.log(typeCombinations.length);
};


let types = [];
let dmgMap = new Map();
let combos = [];
buildTypeCombinations(types, dmgMap, combos);
