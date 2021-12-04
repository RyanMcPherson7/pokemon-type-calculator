const getTypeData = require('./src/get-type-data');

let typeDamageRelationMap = new Map();

// getting names
const createDamageSets = async () => {
  for (let i = 1; i <= 18; i++) {
    const typeData = await getTypeData(i);
    typeDamageRelationMap.set(typeData.name, typeData.damage_relations);
  }

  typeDamageRelationMap.forEach((typeRelation, typeName) => {
    // console.log(typeName, typeRelation);
    let score = 0;
    let typeCount = 0;
    score -= typeRelation.double_damage_from.length * 2;
    typeCount += typeRelation.double_damage_from.length;
    score += typeRelation.double_damage_to.length * 2;
    typeCount += typeRelation.double_damage_to.length;
    score += typeRelation.half_damage_from.length * 2;
    typeCount += typeRelation.half_damage_from.length;
    score -= typeRelation.half_damage_to.length * 2;
    typeCount += typeRelation.half_damage_to.length;
    score += typeRelation.no_damage_from.length * 4;
    typeCount += typeRelation.no_damage_from.length;
    score -= typeRelation.no_damage_to.length * 4;
    typeCount += typeRelation.no_damage_to.length;

    score += 18 - typeCount;

    console.log(typeName, score);
  });
};

createDamageSets();
