import React from 'react';
import { Helmet } from 'react-helmet';

const CustomHelmet = () => {
    return(
        <Helmet>
            <title>OLMAX</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" /> 
        </Helmet>
    )
}

export default CustomHelmet;