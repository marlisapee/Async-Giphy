require('dotenv').config();

const randomNum = Math.floor(Math.random() * 25 + 1);

const getImage = async (query, num) => {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
  const response = await fetch(endpoint);
  const data = await response.json();

  const randomGif = data.data[num];
  console.log(randomGif);

  const dataArr = [];
  data.data.map((gif) => dataArr.push(gif.url));
  console.log(dataArr);
  return dataArr;
};

getImage('dogs', randomNum);
