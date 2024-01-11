import './style.css'
import { fetchData } from "./utils/utils.js";
import { renderStarWars } from './utils/render.js';

const starWars = await fetchData(`https://swapi.dev/api/planets/`)

console.log(starWars)
console.log(starWars.results)

renderStarWars('1')