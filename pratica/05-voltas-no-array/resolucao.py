array1 = [1,2,3,4,5,6,7,8,9,0]
array2 = [3,2,0,1,4]
array3 = [7,0,4,2,3,1,6]

posicoesVisitadas = list()

repetido = bool()

print('Arrays e seus respectivos números de voltas:')

for array in [array1, array2, array3]:
    voltas = 0
    for index in range(0, len(array)):
        if (index not in posicoesVisitadas):
            i = index
            try:
                while i not in posicoesVisitadas:
                    posicoesVisitadas.append(i)
                    i = array[i]
            except IndexError:
                posicoesVisitadas.pop()
            else:
                if (i == index): voltas += 1
        
    posicoesVisitadas.clear()
    print(f'\n • {array}\n\t{voltas} voltas')

input(f'\n{50*"-"}\n\n\tPress <enter> to close ')
