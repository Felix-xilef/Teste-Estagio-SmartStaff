array = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

print(f'Array antes da inversão:\n {array}')

auxArray = list()

for i in array: auxArray.append(i)

for i in range(0, 9): array[i] = auxArray[8-i]

print(f'\nArray depois da inversão:\n {array}')

input('\nPress <enter> to close ')
