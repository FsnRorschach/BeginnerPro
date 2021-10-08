programa
{
	cadeia name
	inteiro grade = 0, grade2, quantGrade
	real result
	
	funcao inicio()
	{
		escreva("Olá seja bem vindo \n")
		escreva("Digite o seu nome: ")
		leia(name)

		escreva("Digite a quantidade de notas que deseja : ")
		leia(quantGrade)
		
		para(inteiro i = 0; i < quantGrade; i+=1){
				escreva("Digite a nota "+(i+1)+" : ")
				leia(grade2)
				grade = grade + grade2
			}


		result = (grade)/quantGrade
		
		se(result >= 0 e result < 7)
		{
			escreva("Resultado da media é: " + result + ", "+ name + " você foi reprovado, até o proxima tentativa.")
		}
		senao se(result >= 7 e result <=10)
		{
			escreva("Resultado da media é: " + result + ", "+ name + " parabéns você foi aprovado.")
		}
		senao
		{
			escreva("Não foi possivel calcular a nota, por favor digite um numero válido entre 0 e 10.")
		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 299; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */