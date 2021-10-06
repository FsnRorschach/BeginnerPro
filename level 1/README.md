Level 1

Exercicio no app Portugol Studio

link: http://lite.acad.univali.br/portugol/

Exercicio 1 

Apresentando o uso de variaveis e funções 

programa
{
	cadeia nome
	inteiro idade
	real altura
	cadeia profissao
	
	funcao inicio()
	{
		escreva("Digite o seu nome: ")
		leia(nome)

		escreva("Digite a sua idade: ")
		leia(idade)

		escreva("Digite a sua altura: ")
		leia(altura)

		escreva(nome +" "+ idade + " anos " + altura +"\n")
		
		escreva("Digite sua profissão: ")
		leia(profissao)
		
		
		
	}
}

Exercicio 2

Programa de calcular a soma de 2 numeros digitados pelo usuário

programa
{
	inteiro number1, number2, result
	
	funcao inicio()
	{
		escreva("Calculadora \n")
		escreva("Vamos somar \n")

		escreva("Digite o primeiro numero: ")
		leia(number1)

		escreva("Digite o segundo numero: ")
		leia(number2)

		result = number1 + number2

		escreva("Resultado da soma é: " + result)
	}
}

Exercicio 3

Programa de calcular a media de notas digitadas pelo usuário

programa
{
	real number1, number2, number3, number4, result
	
	funcao inicio()
	{
		escreva("Calculadora \n")
		escreva("Vamos tirar a media \n")

		escreva("Digite o primeiro numero: ")
		leia(number1)

		escreva("Digite o segundo numero: ")
		leia(number2)

		escreva("Digite o terceiro numero: ")
		leia(number3)

		escreva("Digite o quarto numero: ")
		leia(number4)

		result = (number1 + number2 + number3 + number4)/4 

		se(result < 5)
		{
			escreva("Resultado da media é: " + result + ", você foi reprovado, até o proxima tentativa")
		}senao
		{
			escreva("Resultado da media é: " + result + ", parabéns você foi aprovado, orgulho do papai")
		}

		
	}
}