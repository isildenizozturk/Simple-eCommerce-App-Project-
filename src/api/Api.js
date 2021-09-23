import axios from 'axios';

export default axios.create({
    baseURL: 'https://magic-aliexpress1.p.rapidapi.com/api', // the route that we want to make the request to.
    headers: {
        'x-rapidapi-host': 'magic-aliexpress1.p.rapidapi.com',
        'x-rapidapi-key': 'f517a9c8c9msh92afd702cb423a0p159906jsnbf64a9ffed41'
    }
});