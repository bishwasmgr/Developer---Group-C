def factorial(num):
    # Check if the input is a non-negative integer
    if not isinstance(num, int) or num < 0:
        return None
    
    # Factorial of 0 is 1
    if num == 0:
        return 1
    
    # Calculate the factorial
    result = 1
    for i in range(1, num + 1):
        result *= i

    return result


number = input('Enter a number:')
print('Factorial =', factorial(int(number)))
