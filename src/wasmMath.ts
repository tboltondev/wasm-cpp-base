const add = Module.cwrap(
    "add",
    "number",
    ["number", "number"]
);

const subtract = Module.cwrap(
    "subtract",
    "number",
    ["number", "number"]
);

const multiply = Module.cwrap(
    "multiply",
    "number",
    ["number", "number"]
);

const divide = Module.cwrap(
    "divide",
    "number",
    ["number", "number"]
);

export default {
    add,
    subtract,
    multiply,
    divide,
};

