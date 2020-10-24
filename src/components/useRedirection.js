import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const useRedirection = () => {

    const [redirect, setRedirect] = useState({ to: '' });

    return [Boolean(redirect.to) ? window.open(`${redirect.to}`) : null, setRedirect];
};

export default useRedirection;
