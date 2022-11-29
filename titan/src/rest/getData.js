const getData = async () => {

  const options = new Headers({
    'Content-type': 'application/json',
  });
  const res = await fetch('http://localhost:8081/members', options);
  const data = await res.json();
  console.log(data);
  return data;
}

export default getData;