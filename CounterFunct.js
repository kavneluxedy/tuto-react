import React from "React";

export default function CounterFunc(){
    const [counter, setCounter] = React.useState(0);
    return (
        <button className="btn btn-danger" onClick={() => setCounter(counter + 1)}>Clique aussi : {counter}</button>
    )
}