import axios from 'axios';

export default axios.create({
    baseURL: 'https://magic-aliexpress1.p.rapidapi.com/api', // the route that we want to make the request to.
    headers: {
        'x-rapidapi-host': 'magic-aliexpress1.p.rapidapi.com',
        'x-rapidapi-key': 'pass your api key here'
    }
});
