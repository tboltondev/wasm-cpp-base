#ifndef SUBTRACT_H
#define SUBTRACT_H

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
EMSCRIPTEN_KEEPALIVE
#endif

int subtract(int a, int b);

#endif
