const checkStatusAndParse = response => {
  if (!response.ok) {
    throw new Error(`Status code Error: ${response.status}`);
  } else {
    return response.json();
  }
};

fetch("https://swapi.co/api/planets/")
  .then(checkStatusAndParse)
  .then(data => {
    console.log("FETCHED ALL PLANETS(first 10)");
    for (let planet of data.results) {
      console.log(planet.name);
    }
    const nextURL = data.next;
    return fetch(nextURL);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log("FETCHED NEXT 10 PLANETS");
    for (let planet of data.results) {
      console.log(planet.name);
    }
    const nextURL = data.next;
    return fetch(nextURL);
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETCH");
    console.log(err);
  });
