fetch("https://dummyjson.com/users")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.users;
  })
  .then((usersData) => {
    console.log(usersData);
  });
