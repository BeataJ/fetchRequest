fetch("https://swapi.co/api/planets/")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log("FETCHED ALL PLANETS");
    const filmUrl = data.results[0].films[0];
    return fetch(filmUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log("FETCHED FIRST FILM< BASE OFF FIRST PLANET");
    console.log(data);
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETCH");
    console.log(err);
  });
