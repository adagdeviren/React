import React, { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const Feedback = () => {
        return <p>{count < 10 ? "Keep Counting.." : "It's higher than 10!"} </p>;
    };
    return (
        <div className='counterdiv'>
            <Count count={count} />
            <Feedback />
            <Button setCount={setCount} count={count} />
        </div>
    );
}

export function Count(props) {
    return <p>Count: {props.count}</p>;
}

export function Button(props) {
    return (
        <button onClick={ () => { props.setCount(num => num + 1);}}>
            Add 1!
    </button>
    );
}