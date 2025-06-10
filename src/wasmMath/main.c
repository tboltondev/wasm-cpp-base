#include <stdio.h>

#include "add.h"
#include "subtract.h"
#include "multiply.h"
#include "divide.h"

int main() {
    printf("Wasm math module available\n");

    int addResult = add(3, 2);
    printf("3 + 2 = %d\n", addResult);

    int subtractResult = subtract(3, 2);
    printf("3 - 2 = %d\n", subtractResult);

    int multiplyResult = multiply(3, 2);
    printf("3 x 2 = %d\n", multiplyResult);

    int divideResult = divide(3, 2);
    printf("3 ÷ 2 = %d\n", divideResult);

    return 0;
}
