import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('root'));




// const button = document.querySelector("#searchGiphy");
// const API_KEY = '6pru14UvLOEhi06VmrSebbDCbTnyS6Ry';
// const baseUrl =
// `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

// button.addEventListener('click', () => {
//   const searchTerm = document.querySelector('#search').value;
//   alert(`you searched for: ${searchTerm}`)
//   const images = fetch(`${baseUrl}&q=${searchTerm}&limit=25&offset=0&rating=PG-13&lang=en`)
//   .then(res => res.json())

// });