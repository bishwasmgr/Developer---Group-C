def allPrimesUpTo(num):
    if num < 2:
        return []
    
    # Initialize a list to track prime numbers
    primes = [True] * num
    primes[0] = primes[1] = False  # 0 and 1 are not prime numbers

    for i in range(2, int(num ** 0.5) + 1):
        if primes[i]:
            for j in range(i * i, num, i):
                primes[j] = False
    
    # Collect all prime numbers
    result = [i for i in range(2, num) if primes[i]]
    
    return result

number=input('Enter a number:')
print('Prime numbers upto',number,':',(allPrimesUpTo(int(number))))