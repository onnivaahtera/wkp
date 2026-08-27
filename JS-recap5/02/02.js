const post = async () => {
  try {
    const res = await fetch('https://reqres.in/api/users', {
      method: 'post',
      body: JSON.stringify({Name: 'John', Job: 'Unemployed'}),
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

post();
