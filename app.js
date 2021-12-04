const getTypeData = require('./src/get-type-data');

// getting names
const run = async () => {
  for (let i = 1; i <= 18; i++) {
    const type = await getTypeData(i);
    console.log(type.name);
    console.log(type.damage_relations)
  }
};

run();