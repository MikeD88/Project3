const getTraining = async () => {
  const options = new Headers({
    'Content-type': 'application/json',
  });
  const res = await fetch('http://localhost:8081/trainings', options);
  const data = await res.json();
  console.log(data);
  return data;
}

export default getTraining;