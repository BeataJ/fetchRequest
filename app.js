fetch("https://swapi.co/api/planets/")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => {
    for (let planet of data.results) {
      console.log(planet);
      console.log(planet.name);
    }
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETCH");
    console.log(err);
  });
