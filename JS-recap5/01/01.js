const get = async () => {
  try {
    const res = await fetch('https://reqres.in/api/users/1', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

get();
