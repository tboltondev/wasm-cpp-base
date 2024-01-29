cmake_minimum_required(VERSION 3.28)

project(wasm_cpp_base LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(
  main
  src/main.cpp
  src/add.cpp
  src/add.h
  src/subtract.cpp
  src/subtract.h
  src/multiply.cpp
  src/multiply.h
  src/divide.cpp
  src/divide.h)

if(EMSCRIPTEN)
  target_link_options(
    main PRIVATE
    -sEXPORTED_FUNCTIONS=['_add','_subtract','_multiply','_divide']
    -sEXPORTED_RUNTIME_METHODS=['ccall','cwrap'])
endif()

file(GLOB PUBLIC_HTML "src/*.html")
file(COPY ${PUBLIC_HTML} DESTINATION .)

file(GLOB PUBLIC_JS "src/*.js")
file(COPY ${PUBLIC_JS} DESTINATION .)

file(GLOB PUBLIC_CSS "src/*.css")
file(COPY ${PUBLIC_CSS} DESTINATION .)
