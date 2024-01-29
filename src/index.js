const wasmAdd = Module.cwrap(
    "add",
    "number",
    ["number", "number"]
);

const wasmSubtract = Module.cwrap(
    "subtract",
    "number",
    ["number", "number"]
);

const wasmMultiply = Module.cwrap(
    "multiply",
    "number",
    ["number", "number"]
);

const wasmDivide = Module.cwrap(
    "divide",
    "number",
    ["number", "number"]
);

const appRoot = document.querySelector("#root");

const Input = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    return input;
};

const Button = ({ text, onClick }) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.addEventListener("click", onClick);
    return btn;
};

const Div = ({ text, children, className }) => {
    const div = document.createElement("div");

    if (text) {
        div.innerText = text;
    }

    if (children) {
        children.forEach(child => div.appendChild(child));
    }

    if (className) {
        div.setAttribute("class", className);
    }

    return div;
};

/**
 *  Option
 *  { text: string, value: string }
 */
const Dropdown = ({ options, id }) => {
    const select = document.createElement("select");
    select.setAttribute("id", id);

    options.forEach(option => {
        const optionEl = document.createElement("option");
        optionEl.innerText = option.text;
        optionEl.setAttribute("value", option.value);
        select.appendChild(optionEl);
    });

    return select;
};

const input1 = Input();
const input2 = Input();

const operator = Dropdown({
    options: [
        { text: "+", value: "+" },
        { text: "-", value: "-" },
        { text: "✕", value: "✕" },
        { text: "÷", value: "÷" },
    ],
    id: "operatorSelector",
});

const handleClick = () => {
    const val1 = input1.value;
    const val2 = input2.value;

    let result;

    switch (operator.value) {
        case "+":
            result = wasmAdd(val1, val2);
            break;
        case "-":
            result = wasmSubtract(val1, val2);
            break;
        case "✕":
            result = wasmMultiply(val1, val2);
            break;
        case "÷":
            result = wasmDivide(val1, val2);
            break;
    }

    const sum = Div({ text: `${val1} ${operator.value} ${val2} = ${result}` });
    appRoot.appendChild(sum);
};

const button = Button({
    text: "=",
    onClick: handleClick
});

const inputs = Div({
    children: [input1, operator, input2, button],
    className: "inputs",
});

const components = [inputs];
components.forEach(component => {
    appRoot.appendChild(component);
});

