import React, { useState, useEffect } from 'react';
import Api from '../api/Api';

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await Api.get('/products/search', {
                params: {
                    limit: 30,
                    name: searchTerm,

                }
            }
            );
            setResult(response.data.docs);
        } catch (err) {
            setErrorMessage('Something went wrong');
            console.log(err);

        }
    };


    useEffect(() => {
        searchApi('Playstation')
    }, []);


    return [searchApi, results, errorMessage];

};