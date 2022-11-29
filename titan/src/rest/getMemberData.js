const getMemberRecordData = async (id) => {
  const options = new Headers({
    'Content-type': 'application/json',
  });
  const res = await fetch(`http://localhost:8081/member-records/${id}`, options);
  const data = await res.json();
  console.log(data);
  return data;
}

export default getMemberRecordData;