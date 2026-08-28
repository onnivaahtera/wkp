export const restaurantRow = (restaurant) => {
  const {name, address} = restaurant;
  const row = document.createElement('tr');
  row.innerHTML = `
            <td>${name}</td>
            <td>${address}</td>
            `;

  return row;
};

export const restaurantModal = (restaurant, menu) => {
  let menuHtml = `<ul>`;
  const {address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;
  courses.length > 0
    ? courses?.map(({name, diets, price}) => {
        menuHtml += `<li>${name ?? 'Not available'}, ${diets ?? 'Not available'}, ${price ?? 'Not available'}</li>`;
      })
    : (menuHtml += `<li>The menu is not available</li>`);
  menuHtml += '</ul>';

  menuHtml += `
  <p>Address: ${address ?? 'Not available'}</p>
  <p>Postal code: ${postalCode ?? 'Not available'}</p>
  <p>City: ${city ?? 'Not available'}</p>
  <p>Phone: ${phone ?? 'Not available'}</p>
  <p>Company: ${company ?? 'Not available'}</p>
  `;

  return menuHtml;
};
