import { type Component, For, createSignal } from 'solid-js';
import WasmMath from './wasmMath';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from './operators';
import { OperatorSelector } from './components/operatorSelector';

const App: Component = () => {
    const [operator, setOperator] = createSignal(ADD);
    const [results, setResults] = createSignal<string[]>([]);
    const [val1, setVal1] = createSignal(0);
    const [val2, setVal2] = createSignal(0);
    const [result, setResult] = createSignal(0);

    const handleClick = () => {
        switch (operator()) {
            case ADD:
                setResult(WasmMath.add(val1(), val2()));
                break;
            case SUBTRACT:
                setResult(WasmMath.subtract(val1(), val2()));
                break;
            case MULTIPLY:
                setResult(WasmMath.multiply(val1(), val2()));
                break;
            case DIVIDE:
                setResult(WasmMath.divide(val1(), val2()));
                break;
        }

        setResults((results) =>
            [...results, `${val1()} ${operator()} ${val2()} = ${result()}`]
        );
    };

    const handleInput1 = (event) => {
        setVal1(event.target.value);
    };

    const handleInput2 = (event) => {
        setVal2(event.target.value);
    };

    return (
        <div>
            <input onInput={handleInput1} />
            <OperatorSelector setOperator={setOperator} />
            <input onInput={handleInput2} />
            <button onClick={handleClick}>=</button>
            <For each={results()}>
                {res => (
                    <p>{res()}</p>
                )}
            </For>
        </div>
    );
};

export default App;

