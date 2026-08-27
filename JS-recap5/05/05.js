const getRestaurants = async () => {
  try {
    const res = await fetch(
      'https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants'
    );
    if (!res.status) {
      throw new Error('Error', res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDailyMenu = async (id) => {
  try {
    const res = await fetch(
      `https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/en`
    );
    if (!res.status) {
      throw new Error('Error', res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const dialog = document.querySelector('dialog');
const table = document.querySelector('table');

const render = async () => {
  const restaurants = await getRestaurants();
  restaurants.map((restaurant) => {
    const tr = document.createElement('tr');
    const name = document.createElement('th');
    const address = document.createElement('th');

    name.innerHTML = restaurant.name;
    address.innerHTML = restaurant.address;

    name.addEventListener('click', () => {
      document.querySelectorAll('th').forEach((i) => {
        i.classList.remove('highlight');
      });

      name.classList.add('highlight');
      renderDialog(restaurant);
    });

    tr.append(name, address);
    table.appendChild(tr);
  });

  const renderDialog = async (restaurant) => {
    // Clear old modal content
    dialog.innerHTML = '';

    // Create modal content
    const title = document.createElement('h1');
    title.textContent = restaurant.name;
    const menuContainer = document.createElement('div');

    const menu = await getDailyMenu(restaurant._id);
    menu.courses.map((i) => {
      const menuItem = document.createElement('p');
      menuItem.textContent = `${i.name}, ${i.diets}, ${i.price}`;
      menuContainer.appendChild(menuItem);
    });

    const addressText = document.createElement('p');
    addressText.textContent = `Address: ${restaurant.address}`;

    const postalCode = document.createElement('p');
    postalCode.textContent = `Postal code: ${restaurant.postalCode}`;

    const city = document.createElement('p');
    city.textContent = `City: ${restaurant.city}`;

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${restaurant.phone}`;

    const company = document.createElement('p');
    company.textContent = `Company: ${restaurant.company}`;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';

    closeButton.addEventListener('click', () => {
      dialog.close();
    });

    dialog.append(
      title,
      menuContainer,
      addressText,
      postalCode,
      city,
      phone,
      company,
      closeButton
    );

    dialog.showModal();
  };
};

render();
