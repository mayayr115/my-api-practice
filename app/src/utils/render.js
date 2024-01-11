import { fetchData } from "./utils.js";

export const renderStarWars = async (num) => {
  // Fetc info on the Characters in Star Wars
  const starWars = await fetchData(`https://swapi.dev/api/planets/${num}/`)

  // Create a div container to store character info
  const div = document.createElement('div')
  // FIND ATTRIBUTES
  div.innerHTML = `
  <ul>${starWars.name}</ul>
  `
  document.querySelector('#app').append(div);
}