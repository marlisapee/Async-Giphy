require('dotenv').config();

const getImage = async (query) => {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en`;
  const response = await fetch(endpoint);
  const data = await response.json();
  const oneGifUrl = data.data[0].url;
  console.log(oneGifUrl);
};

getImage('dogs');
