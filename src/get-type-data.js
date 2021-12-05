const axios = require('axios');

exports.getTypeData = async (type) => {
  const res = await axios({
    method: 'get',
    url: `https://pokeapi.co/api/v2/type/${type}`,
  });

  return res.data;
};
