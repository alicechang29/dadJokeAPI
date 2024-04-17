/*
use ICanHazDadJoke API to generate 10 jokes
*/
const JOKE_COLLECTION = [];

/**Use ICanHazDadJoke API to fetch a Joke */
async function getJokes() {
  let count = 0;

  while (count < 10) {

    const resp = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept': 'application/json'
      }
    });

    const text = await resp.text();

    const data = JSON.parse(text);

    const joke = data.joke;

    JOKE_COLLECTION.push(joke);
    count++;

  }
  console.log(JOKE_COLLECTION);
  //displayJokes();
};


export { JOKE_COLLECTION, getJokes }

