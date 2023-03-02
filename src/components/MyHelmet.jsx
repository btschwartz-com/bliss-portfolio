import React from "react";


import { Helmet } from "react-helmet-async";


export const MyHelmet = (props) => {
    const { title, description } = props;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}