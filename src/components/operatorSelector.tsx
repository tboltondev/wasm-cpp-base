import { Component, JSX, For } from "solid-js";
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../operators';

type OperatorSelectorProps = {
    setOperator: Function
};

export const OperatorSelector: Component<OperatorSelectorProps> = (props) => {
    const handleChange: JSX.ChangeEventHandler<HTMLSelectElement, Event> = (event) => {
        props.setOperator(event.currentTarget.value);
    };

    return (
        <select onChange={handleChange}>
            <For each={[ADD, SUBTRACT, MULTIPLY, DIVIDE]}>
                {(operator) => (
                    <option value={operator}>{operator}</option>
                )}
            </For>
        </select>
    );
};

