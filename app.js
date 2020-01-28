fetch("https://swapi.co/api/planets/").then(response => {
  response.json().then(data => {
    for (let planet of data.results) {
      console.log(planet.name);
    }
  });
});
