Learnings:

- Need to wait for API call to finish before appending items to the DOM
- need to use async function when using await method
```js
async function start() {
  await getJokes(); //waiting for all jokes to load first
  displayJokes();
}
```

- When API has headers, add it as an object in the fetch config parameters
```js
const resp = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept': 'application/json'
      }
    });
```

Future Ideas:
- add a load more button at bottom of page to load more jokes
- reorder the jokes based on popularity
- Add a count button for the likes