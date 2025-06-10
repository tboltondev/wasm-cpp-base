# wasm-c-template

A base setup for C WebAssembly projects.

The key parts of this template are the `src/wasmMath` directory which contains the C code and the `CMakeLists.txt` which is used to configure and build the WebAssembly module and neccessary JS 'glue code'. The output will be located in the generated `build` directory, named `main.wasm` and `main.js`.

The front-end code has been left intentionally very simple and with no dependencies so that it can be easily replaced by any framework or JS setup desired.

### Pre-requisites:
Install emsdk by following the instructions on the
[emscripten site](https://emscripten.org/docs/getting_started/downloads.html)

Install cmake from [here](https://cmake.org/download/)

### To build:
```sh
emcmake cmake -B build -S .
cmake --build build/
```
Further builds of the wasm module can be created only with `cmake --build build/`.

If modifying the html, js or css then `emcmake cmake -B build -S .` must be run again because the `CMakeLists.txt` uses `file(COPY ...)` to copy the static files into the build directory.

### To serve the built files:
Any basic web server can be used, emsdk comes with the `emrun` command for this.
```sh
emrun --port 3000 build
```
