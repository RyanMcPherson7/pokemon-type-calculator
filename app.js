const { getTypeData } = require('./src/get-type-data');

let typeDamageRelationMap = new Map();

// getting names
const createDamageSets = async () => {
  for (let i = 1; i <= 18; i++) {
    const typeData = await getTypeData(i);
    typeDamageRelationMap.set(typeData.name, typeData.damage_relations);
  }

  typeDamageRelationMap.forEach((typeRelation, typeName) => {
    let score = 0;
    const damageMult = 1;
    score -= typeRelation.double_damage_from.length * damageMult;
    score += typeRelation.double_damage_to.length * damageMult;
    score += typeRelation.half_damage_from.length * damageMult;
    score -= typeRelation.half_damage_to.length * damageMult;
    score += typeRelation.no_damage_from.length * damageMult * 2;
    score -= typeRelation.no_damage_to.length * damageMult * 2;

    console.log(typeName, score);
  });
};

createDamageSets();
