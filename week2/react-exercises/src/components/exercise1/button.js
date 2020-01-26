import React from 'react';

export default function Button({action}) {

    return (
        <div>
            <button onClick={action}>Get a Friend!</button>
        </div>
    )
}