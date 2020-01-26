
import React, { useState, useEffect } from "react";
import FriendProfile from '../exercise1/FriendProfile';
import Button from '../exercise1/button';


export default function Friend() {

    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const getFriend = () => {
        setLoading(true);

        fetch('https://www.randomuser.me/api?results=1')
            .then(response => response.json())
            .then(data => {
                setFriend(data.results[0]);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(true);
                setLoading(false);
            });

    };

    useEffect(getFriend, []);

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    if (hasError) {
        return <p>Something went wrong!!!</p>;
    }
    if (friend) {
        return (
            <div className="friendArea">
                <FriendProfile friend={friend} />
                <Button action={getFriend} />
            </div>
        );
    }


}
