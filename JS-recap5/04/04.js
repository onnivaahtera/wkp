const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.status) {
      throw new Error(`Response status ${res.status}`);
    }

    return res.json();
  } catch (e) {
    console.log(`Error ${e.message}`);
  }
};

const test = async () => {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

test();
