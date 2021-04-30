array1 = [0, 1, 2, 3, 4, 5]
array2 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
array3 = [6, 7, 8, 9, 10]

arrayFinal = list()

for arrayI in [array1, array2, array3]:
    for i in arrayI:
        arrayFinal.append(i)

print(arrayFinal)

input('\nPress <enter> to close ')
