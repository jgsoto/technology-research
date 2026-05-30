import {useState, useEffect, useRef, useLayoutEffect} from 'react';

function Home(){
    const [count, setCount] = useState(0);

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        alert('Home mounted');
    },[]);

    useLayoutEffect(() => {
        alert(boxRef.current?.offsetWidth);
    },[]);

    return(
        <div ref={boxRef}>
            <h1>Homepage</h1>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count +1)}>Increment</button>

        </div>
    )
}

export default Home;