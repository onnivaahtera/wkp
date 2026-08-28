import {baseUrl} from './variables.js';

export const getRestaurants = async () => {
  try {
    const res = await fetch(`${baseUrl}`);
    if (!res.status) {
      throw new Error('Error', res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDailyMenu = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/daily/${id}/en`);
    if (!res.ok) {
      throw new Error('Error', res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
