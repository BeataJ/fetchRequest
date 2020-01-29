const checkStatusAndParse = response => {
  if (!response.ok) {
    throw new Error(`Status code Error: ${response.status}`);
  } else {
    return response.json();
  }
};

const printPlanets = data => {
  console.log("FETCHED ALL PLANETS(first 10)");
  for (let planet of data.results) {
    console.log(planet.name);
  }

  return Promise.resolve(data.next);
};

const fetchNextPlanets = url => {
  return fetch(url);
};

fetch("https://swapi.co/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETCH");
    console.log(err);
  });
