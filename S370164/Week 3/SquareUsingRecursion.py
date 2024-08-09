#Finding square using recursive function 

def triangle(num):
    if num == 1:
        return num
    return num + triangle(num - 1)

def square(num):
    return triangle(num) + triangle(num - 1)


number=int(input('Enter a number:'))
print('Square of',number,'is:',square(number))