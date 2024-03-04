// Api.jsx

// constants/API.jsx

const apiUrl = 'https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '1d71657929msh474fb8fc937c209p19a944jsnbcd1a5dd5bee',
		'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		text: '<REQUIRED>',
		accessToken: '<REQUIRED>'
	})
};

const fetchYelpData = async () => {
    try {
        const response = await fetch(apiUrl, options);
        const result = await response.text();
        console.log(result);
        return result; // or return JSON.parse(result) if response is JSON
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default fetchYelpData;
