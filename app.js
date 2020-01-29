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
  // const p = new Promise((resolve, reject) => {
  //   resolve(data);
  // });
  // return p;

  return Promise.resolve(data);
};

fetch("https://swapi.co/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(data => {
    const nextURL = data.next;
    return fetch(nextURL);
  })
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(data => {
    const nextURL = data.next;
    return fetch(nextURL);
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETCH");
    console.log(err);
  });
