// Api.jsx


const fetchData = async () => {
	const url = 'https://burgers-hub.p.rapidapi.com/burgers';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '1d71657929msh474fb8fc937c209p19a944jsnbcd1a5dd5bee',
		'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const data = await response.json(); // Assuming response is JSON
	  return data;
	} catch (error) {
	  console.error(error);
	  return null;
	}
  };
  
  export default fetchData;
  