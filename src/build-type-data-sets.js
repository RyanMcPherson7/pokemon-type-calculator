const { getTypeData } = require('./get-type-data');

exports.buildTypeDataSets = async (typeDmgMap, typeCombos) => {
  let types = [];

  // building type name list and type damage relation map
  for (let i = 1; i <= 18; i++) {
    const typeData = await getTypeData(i);
    types.push(typeData.name);
    typeDmgMap.set(typeData.name, typeData.damage_relations);
  }

  // building type combination list
  for (let i = 0; i < 18; i++) {
    // pure types
    typeCombos.push([types[i]]);

    // duel types
    for (let j = i + 1; j < 18; j++) 
      typeCombos.push([types[i], types[j]]);
  }
};
