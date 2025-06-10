#ifndef ADD_H
#define ADD_H

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
EMSCRIPTEN_KEEPALIVE
#endif

int add(int a, int b);

#endif
