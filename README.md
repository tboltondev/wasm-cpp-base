# wasm-cpp-base

### Pre-requisite:
Install emsdk by following the instructions on the
[emscripten site](https://emscripten.org/docs/getting_started/downloads.html)

### To build:
```sh
emcmake cmake -B build -S .
cmake --build build/
```
Further builds can be created only with `cmake --build build/`

### To serve the built files:
```sh
emrun --port 3000 build
```

