import { createElement } from "./createElement.js";
import { Equals } from "./equals.js";
import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from "./operators.js";

const appRoot = document.querySelector("#root");

const OperatorSelector = () => createElement({
    tag: "select",
    attributes: { id: "operatorSelector" },
    children: [ADD, SUBTRACT, MULTIPLY, DIVIDE].map(operator =>
        createElement({
            tag: "option",
            text: operator,
            attributes: { value: operator },
        })
    ),
});

const Inputs = () => {
    const input1 = createElement({
        tag: "input",
        attributes: { type: "text" },
        eventListeners: {
            change: (event) => {
                state.val1 = event.target.value;
            },
        },
    });

    const input2 = createElement({
        tag: "input",
        attributes: { type: "text" },
        eventListeners: {
            change: (event) => {
                state.val2 = event.target.value;
            },
        },
    });

    const selector = OperatorSelector();

    return createElement({
        tag: "div",
        attributes: { id: "inputs" },
        children: [input1, selector, input2],
    });
};

const App = () => {
    const state = {
        val1: 0,
        val2: 0,
    };
    
    const results = createElement({
        tag: "div",
        attributes: {
            id: "results",
        },
    });

    return createElement({
        tag: "div",
        attributes: { id: "app" },
        children: [
            Inputs(),
            Equals(state.val1, state.val2, selector.value, results),
            results,
        ],
    });
};

const components = [App()];
components.forEach(component => {
    appRoot.appendChild(component);
});

