import { JOKE_COLLECTION, getJokes } from "./script";

/**displays all the jokes from JOKE_COLLECTION in the DOM */
function displayJokes() {
  console.log(displayJokes);
  console.log({ JOKE_COLLECTION });

  const $jokesArea = document.querySelector("#jokes-area");

  for (let jokeItem of JOKE_COLLECTION) {
    const jokeDiv = document.createElement("p");
    jokeDiv.classList.add("joke-item");
    jokeDiv.innerHTML = jokeItem;

    const upBtn = document.createElement("button");
    upBtn.innerHTML = '👍';
    upBtn.classList.add("like-btn");

    const downBtn = document.createElement("button");
    downBtn.innerHTML = '👎';
    downBtn.classList.add("dislike-btn");

    jokeDiv.appendChild(upBtn);
    jokeDiv.appendChild(downBtn);
    $jokesArea.appendChild(jokeDiv);
  }

}

/**waits for jokes to load before running the displayJokes function*/
async function start() {
  await getJokes(); //waiting for all jokes to load before moving on to display Jokes
  displayJokes();
}

export { start };