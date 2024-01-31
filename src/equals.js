import { createElement } from "./createElement.js";
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from "./operators.js";
import WasmMath from "./wasmMath.js";

export const Equals = (val1, val2, operator, results) => {
    const handleClick = () => {
        let result;

        switch (operator) {
            case ADD:
                result = WasmMath.add(val1, val2);
                break;
            case SUBTRACT:
                result = WasmMath.subtract(val1, val2);
                break;
            case MULTIPLY:
                result = WasmMath.multiply(val1, val2);
                break;
            case DIVIDE:
                result = WasmMath.divide(val1, val2);
                break;
        }

        const sum = createElement({
            tag: "div",
            text: `${val1} ${operator} ${val2} = ${result}`,
        });
        results.appendChild(sum);
    };

    return createElement({
        tag: "button",
        text: "=",
        eventListeners: {
            click: handleClick,
        },
    });
};

