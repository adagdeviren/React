import React from 'react';

export default function FriendProfile({ friend }) {
    return (
        <div>
            <ul>
                <li>Name : {friend.name.first}{" "}{friend.name.last}
                </li>
                <li>Address / Country : {friend.location.street.number}{" "}{friend.location.country}
                </li>
                <li>E-mail : {friend.email}</li>
                <li>Phone :{friend.phone}</li>
            </ul>
        </div>
    )
}