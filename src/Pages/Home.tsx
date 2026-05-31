import { useState, useEffect, useRef, useLayoutEffect } from 'react';

function Home() {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        alert('Home mounted');
    }, []);

    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.offsetWidth);
        }
    }, []);

    return (
        <div
            ref={boxRef}
            className="w-196 border rounded-lg p-4 shadow"
        >
            <h1 className="text-2xl font-bold mb-4">
                Homepage
            </h1>
            <p>Count: {count}</p>
            <p>Width: {width}px</p>

            <button
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    )
}

export default Home;