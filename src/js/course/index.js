import React from 'react';
import { render } from 'react-dom';
import App from './pages/app';

const Init = () => {

    const target = document.getElementById('js-course');
    render(<App />, target);
    
}

export default Init;
