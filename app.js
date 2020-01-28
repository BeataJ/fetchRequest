fetch("https://swapi.co/api/planets/")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log(data.results[0].films[0]);
  })
  .catch(err => {
    console.log("SOMETHING WENT WRONG WITH FETCH");
    console.log(err);
  });
