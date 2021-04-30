entrada = ['ab', 'bc', 'abc', 'cba', 'ab', 'ab', 'cba']
verificacao = ['ab', 'cba', 'bb']

print(f'Arrays:\n - entrada = {entrada}\n - verificação = {verificacao}')

contagem = [0, 0, 0]

for entr in entrada:
    for i in range(0, 3):
        if entr == verificacao[i]:
            contagem[i] += 1

print(f'\nResultado da contagem:\n {contagem}')

input('\nPress <enter> to close ')
