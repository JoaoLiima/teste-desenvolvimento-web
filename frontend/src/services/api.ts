import axios from 'axios';

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export const backendApi = axios.create({
  baseURL: 'http://localhost:3333/pokemon/',
});
