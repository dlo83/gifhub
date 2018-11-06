const API_KEY = '6pru14UvLOEhi06VmrSebbDCbTnyS6Ry';
const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }`;

export const search = ({query, limit = '25', rating = 'G'}) => {
  return fetch(`${ baseUrl }&q=${ query }&limit=${ limit }&offset=0&rating=${ rating }&lang=en`)
  .then(res => res.json());
}