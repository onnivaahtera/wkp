const get = async () => {
  try {
    const res = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(`Error ${e.message}`);
  }
};

const post = async () => {
  try {
    const res = await fetch('https://reqres.in/api/unknown/23', {
      method: 'post',
      body: JSON.stringify({Name: 'John', Job: 'Unemployed'}),
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    console.log(res);
  } catch (e) {
    console.log(`Error ${e.message}`);
  }
};

post();

get();
