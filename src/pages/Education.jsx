import { useState, useEffect } from 'react';
import endpoints from '../app/endpoints';
import FallbackSpinner from '../components/FallbackSpinner';



import React from "react";
import { CardView } from '../components/CardView';



export const Education = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.education, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    const categories = ['Courses', 'Freelance', 'Certificates']
    const pageTitle = 'Education'
    return (
        <>
        {data ? (
            <CardView
                cards={data.education}
                categories={categories}
                pageTitle={pageTitle}
            />
        ): <FallbackSpinner />}
        
        </>
        
    );
};