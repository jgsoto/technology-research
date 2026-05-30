import CounterDisplay from '../Components/CounterDisplay';
import CounterButtons from '../Components/CounterButtons';

function Counter() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Zustand Counter</h1>
            <CounterDisplay />
            <CounterButtons />
        </div>
    )
}

export default Counter;