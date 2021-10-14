programa
{
	inclua biblioteca Matematica
	
	inteiro sexo, idade
	real altura, result
	funcao inicio()
	{
		escreva("Calculadora de peso ideal")

		escreva("Digite o gênero : ( 1 ) - Masculino | ( 2 ) - Feminino \n")
		leia(sexo)

		escreva("Digite a sua altura : ")
		leia(altura)

		escreva("Digite a sua idade : ")
		leia(idade)
		
		se(sexo == 1){
			se(altura > 1.70){
				se(idade <= 20){
					result = (altura * 72.7) - 58)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}senao se(idade >= 21 e idade <= 39){
					result = (altura * 72.7) - 53)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}senao se(idade >= 40){
					result = (altura * 72.7) - 45)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}
			}senao se(altura <= 1.70){
				se(idade <= 40){
					result = (altura * 72.7) - 50)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}senao se(idade > 40){
					result = (altura * 72.7) - 58)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}
			}
		}senao se(sexo == 2){
			se(altura > 1.50){
				result = (altura * 62.1) - 44.7)
				escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
			}senao se(altura <= 1.50){
				se(idade >= 35){
					result = (altura * 62.1) - 45)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}senao se(idade < 35){
					result = (altura * 62.1) - 49)
					escreva("O seu peso ideal é : " + Matematica.arredondar(result, 2) + "\n")
				}
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 333; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */