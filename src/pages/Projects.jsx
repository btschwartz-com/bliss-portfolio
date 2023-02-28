
import { useState, useEffect } from 'react';
import endpoints from '../app/endpoints';
import FallbackSpinner from '../components/FallbackSpinner';



import React from "react";
import { CardView } from '../components/CardView';



export const Projects = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.projects, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    const categories = ['Featured', 'School', 'Personal']
    const pageTitle = 'Projects'
    return (
        <>
        {data ? (
            <CardView
                cards={data.projects}
                categories={categories}
                pageTitle={pageTitle}
            />
        ): <FallbackSpinner />}
        
        </>
        
    );
};