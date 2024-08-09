def hexToDec(hexNum):
    hexNumbers = {
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, 
        '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
    }

    # Convert the hexadecimal string to uppercase to handle both 'a' and 'A'
    hexNum = hexNum.upper()

    # Initialize the decimal value
    decimalValue = 0

    # Iterate over each character in the hexadecimal string
    for i, char in enumerate(reversed(hexNum)):
        if char not in hexNumbers:
            return None  # Return None if the character is not a valid hex digit

        # Calculate the value of the current digit
        decimalValue += hexNumbers[char] * (16 ** i)

    return decimalValue


hex=input('Enter a Hexadecimal:')
print(hexToDec(hex))