import React, { useState, useEffect } from 'react';
import Api from '../api/Api';

export default () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        aliExpressApi()
    }, []);

    const aliExpressApi = async () => {

        try {
            const response = await Api.get('/bestSales/SortedByNewest', {
                params: {
                    limit: '20',

                }
            });
            console.log(response.data);
            setResults(response.data)
        } catch (err) {
            console.log(err);
        }
    }


    return [aliExpressApi, results];

};