def encodeString(stringVal):
    if not stringVal:
        return []
    
    encoded_list = []
    current_char = stringVal[0]
    count = 0
    
    for char in stringVal:
        if char == current_char:
            count += 1
        else:
            encoded_list.append((current_char, count))
            current_char = char
            count = 1
    
    encoded_list.append((current_char, count))
    
    return encoded_list

def decodeString(encodedList):
    decoded_string = ''
    
    for char, count in encodedList:
        decoded_string += char * count
        
    return decoded_string

enco=input('Enter a srting to Encode:')
encoded = encodeString(enco)
print('\nEncoded string:',encoded)
