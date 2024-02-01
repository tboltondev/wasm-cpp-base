# wasm-cpp-base

### Pre-requisite:
Install emsdk by following the instructions on the
[emscripten site](https://emscripten.org/docs/getting_started/downloads.html)

Install cmake from [here](https://cmake.org/download/)

### To build:
```sh
emcmake cmake -B build -S .
cmake --build build/
```
Further builds can be created only with `cmake --build build/`

### To serve the built files:
Any basic web server can be used, emsdk comes with the `emrun` command for this.
```sh
emrun --port 3000 build
```
