import { useState, useEffect, useRef, useLayoutEffect } from 'react';

function Home() {
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.offsetWidth);
        }
    }, []);

    return (
        <div
            ref={boxRef}
            data-cy="home-container"
            className="w-196 border rounded-lg p-4 shadow"
        >
            <h1
                data-cy="home-title"
                className="text-2xl font-bold mb-4">
                Homepage
            </h1>

            {loaded && (
                <p data-cy="loaded-message">
                    Component Loaded
                </p>
            )}

            <p data-cy="count-text">
                Count: {count}
            </p>

            <p data-cy="width-text">
                Width: {width}px
            </p>

            <button
                data-cy="increment-btn"
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default Home;