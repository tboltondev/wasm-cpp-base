#ifndef DIVIDE_H
#define DIVIDE_H

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
EMSCRIPTEN_KEEPALIVE
#endif

int divide(int a, int b);

#endif
