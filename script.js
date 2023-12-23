fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let productsData = "";

    objectData.map((values, key) => {
      productsData += `
      <tr>
            <td>${key + 1}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.category}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}" /></td>
          </tr>`;
    });
    document.getElementById("table_body").innerHTML = productsData;
  });
