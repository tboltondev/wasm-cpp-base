const wasmAdd = Module.cwrap("add", "number", ["number", "number"]);
const wasmSubtract = Module.cwrap("subtract", "number", ["number", "number"]);
const wasmMultiply = Module.cwrap("multiply", "number", ["number", "number"]);
const wasmDivide = Module.cwrap("divide", "number", ["number", "number"]);

const $ = selector => document.querySelector(selector);

const getCalculation = (x, y, operator) => {
    let result;
    switch (operator) {
        case "+":
            result = wasmAdd(x, y);
            break;
        case "-":
            result = wasmSubtract(x, y);
            break;
        case "x":
            result = wasmMultiply(x, y);
            break;
        case "÷":
            result = wasmDivide(x, y);
            break;
    }
    return `${x} ${operator} ${y} = ${result}`;
};

const handleClick = () => {
    const val1 = $`#input1`.value;
    const val2 = $`#input2`.value;
    const operator = $`#operator`.value;

    const p = document.createElement("p");
    p.innerText = getCalculation(val1, val2, operator);
    $`#results`.appendChild(p);
};

$`#equals`.addEventListener("click", handleClick);
