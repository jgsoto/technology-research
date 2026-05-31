import { useCounterStore } from '../Store/counterStore';

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return (
    <div
      data-cy="counter-display"
      className="border rounded-lg p-4"
    >
      <h2
        data-cy="counter-value"
        className="text-xl font-bold"
      >
        Current Count: {count}
      </h2>
    </div>
  );
}

export default CounterDisplay;