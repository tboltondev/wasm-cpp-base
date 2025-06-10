#ifndef MULTIPLY_H
#define MULTIPLY_H

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
EMSCRIPTEN_KEEPALIVE
#endif

int multiply(int a, int b);

#endif
