cmake_minimum_required(VERSION 3.28)

project(wasm_c_template LANGUAGES C)

add_executable(
  main
  src/wasmMath/main.c
  src/wasmMath/add.c
  src/wasmMath/add.h
  src/wasmMath/subtract.c
  src/wasmMath/subtract.h
  src/wasmMath/multiply.c
  src/wasmMath/multiply.h
  src/wasmMath/divide.c
  src/wasmMath/divide.h)

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
