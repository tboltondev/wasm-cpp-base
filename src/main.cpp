#include <iostream>

#include "add.h"
#include "subtract.h"

int main() {
    int addResult = add(3, 2);
    std::cout << "3 + 2 = " << addResult << std::endl;

    int subtractResult = subtract(3, 2);
    std::cout << "3 - 2 = " << subtractResult << std::endl;

    return 0;
}
