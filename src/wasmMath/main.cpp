#include <iostream>

#include "add.hpp"
#include "subtract.hpp"
#include "multiply.hpp"
#include "divide.hpp"

int main() {
    std::cout << "Wasm math module available" << std::endl;

    int addResult = add(3, 2);
    std::cout << "3 + 2 = " << addResult << std::endl;

    int subtractResult = subtract(3, 2);
    std::cout << "3 - 2 = " << subtractResult << std::endl;

    int multiplyResult = multiply(3, 2);
    std::cout << "3 x 2 = " << multiplyResult << std::endl;

    int divideResult = divide(3, 2);
    std::cout << "3 ÷ 2 = " << divideResult << std::endl;

    return 0;
}
