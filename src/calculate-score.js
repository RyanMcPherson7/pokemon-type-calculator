exports.calculateScore = (dmgMap, combo) => {
  let score = 0;

  // pure type
  if (combo.length === 1) {
    const [type] = combo;
    score -= dmgMap.get(type).double_damage_from.length;
    score += dmgMap.get(type).double_damage_to.length;
    score += dmgMap.get(type).half_damage_from.length;
    score -= dmgMap.get(type).half_damage_to.length;
    score += dmgMap.get(type).no_damage_from.length * 2;
    score -= dmgMap.get(type).no_damage_to.length * 2;
  }
  // duel type
  else {
    let dubDmgFrom = new Set();
    let dubDmgTo = new Set();
    let halfDmgFrom = new Set();
    let halfDmgTo = new Set();
    let noDmgFrom = new Set();
    let noDmgTo = new Set();

    combo.forEach((type) => {
      const dmgRelations = dmgMap.get(type);

      dmgRelations.double_damage_from.forEach((opposingType) => {
        dubDmgFrom.add(opposingType.name);
      });
      dmgRelations.double_damage_to.forEach((opposingType) => {
        dubDmgTo.add(opposingType.name);
      });

      dmgRelations.half_damage_from.forEach((opposingType) => {
        halfDmgFrom.add(opposingType.name);
      });
      dmgRelations.half_damage_to.forEach((opposingType) => {
        halfDmgTo.add(opposingType.name);
      });
      dmgRelations.no_damage_from.forEach((opposingType) => {
        noDmgFrom.add(opposingType.name);
      });
      dmgRelations.no_damage_to.forEach((opposingType) => {
        noDmgTo.add(opposingType.name);
      });
    });

    score -= dubDmgFrom.size;
    score += dubDmgTo.size;
    score += halfDmgFrom.size;
    score -= halfDmgTo.size;
    score += noDmgFrom.size * 2;
    score -= noDmgTo.size * 2;
  }

  return score;
};
