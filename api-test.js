const claveApi = '77d8c772089d4812a97224712262109';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data);  