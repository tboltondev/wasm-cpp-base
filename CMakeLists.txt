cmake_minimum_required(VERSION 3.28)

project(wasm_cpp_base LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(
  main
  src/wasmMath/main.cpp
  src/wasmMath/add.cpp
  src/wasmMath/add.h
  src/wasmMath/subtract.cpp
  src/wasmMath/subtract.h
  src/wasmMath/multiply.cpp
  src/wasmMath/multiply.h
  src/wasmMath/divide.cpp
  src/wasmMath/divide.h)

if(EMSCRIPTEN)
  target_link_options(
    main PRIVATE
    -sEXPORTED_FUNCTIONS=['_add','_subtract','_multiply','_divide']
    -sEXPORTED_RUNTIME_METHODS=['ccall','cwrap'])
endif()
