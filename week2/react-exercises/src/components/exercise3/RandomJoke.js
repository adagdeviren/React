import React, { useState, useEffect } from "react";
import Joke from "./Joke";

export default function RandomJoke() {

    const [joke, setJoke] = useState({});
    const [hasError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const getRandomJoke = () => {
        setLoading(true);
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                setJoke(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(true);
                setLoading(false);
            });
    };

    useEffect(getRandomJoke, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (hasError) {
        return <p>Sometghing went wrong!!!</p>;
    }

    if (joke) {
        return (
            <div className='joke'>
                <Joke joke={joke} />
            </div>
        );
    }
}