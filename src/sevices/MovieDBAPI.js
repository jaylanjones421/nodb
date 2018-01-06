import axios from 'axios';

export default function (number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then((response) => {
    delete response.data.moves;
    delete response.data.game_idicies;
    response.data.lvl = Math.floor(Math.random() * 99);
    return response.data;
  });
}