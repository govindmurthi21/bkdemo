import React from 'react';
import MicroFrontend from '../components/MicroFrontend';

function MicroApp2() {
    return (
        <MicroFrontend name='MicroApp2' microProps={{name: 'Some name', value: 'Some value'}} />
    );
}

export default MicroApp2;