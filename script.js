fetch("https://dummyjson.com/users")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.users;
  })
  .then((usersData) => {
    let user = "";

    usersData.map((values, key) => {
      user += `
      <tr>
      <td>${key + 1}</td>
      <td>${values.firstName}</td>
      <td>${values.age}</td>
      <td>${values.gender}</td>
      <td>${values.university}</td>
      <td>${values.address.city}</td>
      <td><img src="${values.image}" /></td>
    </tr>`;
    });
    document.getElementById("table_border").innerHTML = user;
  });
