function getRandomUser() {
  fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
      let usersInfo = '';
      data.results.forEach(user => {
        usersInfo += `
          <article class="user">
            <img src="${user.picture.large}" alt="User Picture">
            <p>Aanspreektitel: ${user.name.title}</p>
            <p>Voornaam: ${user.name.first}</p>
            <p>Achternaam: ${user.name.last}</p>
            <p>Land: ${user.location.country}</p>
          </article>
        `;
      });
      document.getElementById('customer-info').innerHTML = usersInfo;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

getRandomUser();
