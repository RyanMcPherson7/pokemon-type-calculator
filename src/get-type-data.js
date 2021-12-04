const axios = require('axios');
// import axios from 'axios';

const getTypeData = async (type) => {
  const res = await axios({
    method: 'get',
    url: `https://pokeapi.co/api/v2/type/${type}`,
  });

  return res.data;
};

module.exports = getTypeData;
