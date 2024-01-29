const wasm = {
    add: Module.cwrap("add", "number", ["number", "number"]),
    subtract: Module.cwrap("subtract", "number", ["number", "number"]),
    multiply: Module.cwrap("multiply", "number", ["number", "number"]),
    divide: Module.cwrap("divide", "number", ["number", "number"]),
};

const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "x";
const DIVIDE = "÷";

const appRoot = document.querySelector("#root");

const createElement = (parameters) => {
    const { tag, text, attributes, eventListeners, children } = parameters;

    const element = document.createElement(tag);

    if (text) element.innerText = text;

    if (attributes) {
        for (attribute in attributes) {
            if (attribute === "className") {
                element.setAttribute("class", attributes[attribute]);
            } else {
                element.setAttribute(attribute, attributes[attribute]);
            }
        }
    }

    if (eventListeners) {
        for (listener in eventListeners) {
            element.addEventListener(listener, eventListeners[listener]);
        }
    }

    if (children) {
        children.forEach(child => element.appendChild(child));
    }

    return element;
};

const input1 = createElement({
    tag: "input",
    attributes: { type: "text" }
});
const input2 = createElement({
    tag: "input",
    attributes: { type: "text" }
});

const operators = [ADD, SUBTRACT, MULTIPLY, DIVIDE];
const selector = createElement({
    tag: "select",
    attributes: { id: "operatorSelector" },
    children: operators.map(operator =>
        createElement({
            tag: "option",
            text: operator,
            attributes: { value: operator },
        })
    ),
});

const handleClick = () => {
    const val1 = input1.value;
    const val2 = input2.value;

    let result;

    switch (selector.value) {
        case ADD:
            result = wasm.add(val1, val2);
            break;
        case SUBTRACT:
            result = wasm.subtract(val1, val2);
            break;
        case MULTIPLY:
            result = wasm.multiply(val1, val2);
            break;
        case DIVIDE:
            result = wasm.divide(val1, val2);
            break;
    }

    const sum = createElement({
        tag: "div",
        text: `${val1} ${selector.value} ${val2} = ${result}`,
    });
    appRoot.appendChild(sum);
};

const button = createElement({
    tag: "button",
    text: "=",
    eventListeners: {
        click: handleClick,
    },
});

const inputs = createElement({
    tag: "div",
    attributes: { className: "inputs" },
    children: [input1, selector, input2, button],
});

const components = [inputs];
components.forEach(component => {
    appRoot.appendChild(component);
});

