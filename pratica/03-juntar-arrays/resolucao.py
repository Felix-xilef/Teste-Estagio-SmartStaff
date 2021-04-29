array1 = [0, 1, 2, 3, 4, 5]
array2 = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
array3 = [6, 7, 8, 9, 10]

arrayFinal = list()

for i in range(0, 20):
    if (i < 6): arrayFinal.insert(i, array1[i])
    elif (i < 15): arrayFinal.insert(i, array2[i-6])
    else: arrayFinal.insert(i, array3[i-15])

print(arrayFinal)

input('\nPress <enter> to close ')
