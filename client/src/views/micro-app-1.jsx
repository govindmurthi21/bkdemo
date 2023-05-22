import React from 'react';
import MicroFrontend from '../components/MicroFrontend';

function MicroApp1() {
    return (
        <MicroFrontend name='MicroApp1' microProps={{name: 'Some name', value: 'Some value'}} />
    );
}

export default MicroApp1;