programa
{
	inclua biblioteca Matematica --> mat
	inteiro joao = 0, marcia = 0, clovis = 0, roberta =0, nulo =0, branco =0, totalVotos, 
	real joaoPorc, marciaPorc, clovisPorc, robertaPorc, nuloPorc, brancoPorc
	logico sair = falso
	cadeia voto
	
	funcao inicio()
	{
		faca{
			escreva("Eleição é agora\n")
			escreva("digite 1 voto no João \n")
			escreva("digite 2 voto na Márcia \n")
			escreva("digite 3 voto no Clóvis \n")
			escreva("digite 4 voto na Roberta \n")
			escreva("digite 5 voto  Nulo \n")
			escreva("digite 6 voto em Branco \n")
			escreva("digite (F) para finalizar")
			leia(voto)
			
			escolha(voto){
	
				caso "1": escreva("Você votou no joão \n")
					joao += 1 
					pare
				caso "2": escreva("Você votou na Márcia \n")
					marcia += 1
				pare
				caso "3": escreva("Você votou no Clóvis \n")
					clovis += 1
				pare
				caso "4": escreva("Você votou na Roberta \n")
					roberta += 1
				pare
				caso "5": escreva("Você votou Nulo \n")
					nulo += 1
				pare
				caso "6": escreva("Você votou em Branco \n")
					branco += 1
				pare
				caso "F": escreva("Você votou em Branco \n")
					sair += 1
				pare
				caso contrario: escreva("Insira um voto válido \n")
				pare
				}
				escreva("Deseja sair? se sim digite ( F ) \n")
		}enquanto(falso)
		
			totalVotos = joao + marcia + clovis + roberta + nulo + branco

			joaoPorc = (joao * 100) / totalVotos
			escreva(joaoPorc)
			marciaPorc = (marcia * 100) / totalVotos
			escreva(marciaPorc)
			clovisPorc = (clovis * 100) / totalVotos
			escreva(clovisPorc)
			robertaPorc = (roberta * 100) / totalVotos
			escreva(robertaPorc)
			nuloPorc = (nulo * 100) / totalVotos
			escreva(nuloPorc)
			brancoPorc = (branco * 100) / totalVotos
			escreva(brancoPorc)

			
    }
			
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */