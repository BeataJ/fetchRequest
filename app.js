fetch("https://swapi.co/api/planets/")
  .then(response => {
    if (!response.ok) {
      console.log("ERROR NOT STATUS 200", response.status);
    } else {
      response.json().then(data => {
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETECH");
    console.log(err);
  });
