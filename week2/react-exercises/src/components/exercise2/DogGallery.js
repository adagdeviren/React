import React, { useState, useEffect } from "react";
import DogPhoto from "./DogPhoto";
import Button from "./button";

export default function DogGallery() {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const getDogPhoto = () => {
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => {
                setDogPhotos([data.message, ...dogPhotos]);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    };

    useEffect(getDogPhoto, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (hasError) {
        return <p>Something went wrong!!!</p>;
    }
    if (getDogPhoto) {
        return (
            <div className='getAdogArea'>
                <p>
                    Get your dog by clicking the button!
              </p>
                <DogPhoto dogPhotos={dogPhotos} />
                <Button action={getDogPhoto} />
                <hr/>
            </div>
        );
    }
}