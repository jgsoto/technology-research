import { useCounterStore } from '../Store/counterStore';

function CounterButtons() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex gap-4">
      <button
        data-cy="increment-btn"
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Increment
      </button>

      <button
        data-cy="decrement-btn"
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Decrement
      </button>

      <button
        data-cy="reset-btn"
        onClick={reset}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Reset
      </button>
    </div>
  );
}

export default CounterButtons;