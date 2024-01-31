export default {
    add: Module.cwrap("add", "number", ["number", "number"]),
    subtract: Module.cwrap("subtract", "number", ["number", "number"]),
    multiply: Module.cwrap("multiply", "number", ["number", "number"]),
    divide: Module.cwrap("divide", "number", ["number", "number"]),
};

