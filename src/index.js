const wasmAdd = Module.cwrap(
    "add",
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

const input1 = Input();
const input2 = Input();

const handleClick = () => {
    const val1 = input1.value;
    const val2 = input2.value;
    const result = wasmAdd(val1, val2);

    const sum = Div({ text: `${val1} + ${val2} = ${result}` });
    appRoot.appendChild(sum);
};

const addSign = Div({ text: "+" });

const button = Button({
    text: "=",
    onClick: handleClick
});

const inputs = Div({
    children: [input1, addSign, input2, button],
    className: "inputs",
});

const components = [inputs];
components.forEach(component => {
    appRoot.appendChild(component);
});

