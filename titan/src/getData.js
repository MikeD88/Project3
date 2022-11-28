
const getData = async() => {
  const res = await fetch('http://localhost:8081/members');
  const data = await res.json();
  console.log(data);
  return data;
}

export default getData;