import { useCounterStore } from '../Store/counterStore';

function CounterButtons() {
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);

    return (
        <div className="flex gap-4">
            <button
                onClick={increment}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >Increment</button>
            <button
                onClick={decrement}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >Decrement</button>
        </div>
    )
}

export default CounterButtons;