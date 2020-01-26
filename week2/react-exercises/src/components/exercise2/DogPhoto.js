import React from "react";

export default function DogPhoto({ dogPhotos }) {
    return (
        <div>
            <ul>
                {dogPhotos.map(img => (<li> <img src={img} /></li>)  )}
            </ul>
        </div>
    );
}