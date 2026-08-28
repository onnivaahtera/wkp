import {restaurantRow, restaurantModal} from './components.js';
import {getRestaurants, getDailyMenu} from './utils.js';

const dialog = document.querySelector('dialog');
const table = document.querySelector('table');

const render = async () => {
  const restaurants = await getRestaurants();

  restaurants?.map(({_id, ...restaurant}) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      document.querySelectorAll('tr').forEach((i) => {
        i.classList.remove('highlight');
      });
      row.classList.add('highlight');

      const menu = await getDailyMenu(_id);
      dialog.innerHTML = restaurantModal(restaurant, menu);
      dialog.showModal();

      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';

      closeButton.addEventListener('click', () => {
        dialog.close();
      });

      dialog.appendChild(closeButton);
    });

    table.appendChild(row);
  });
};

render();
