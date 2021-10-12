programa
{
	inclua biblioteca Matematica --> mat
	inteiro joao = 0, marcia = 0, clovis = 0, roberta =0, nulo =0, branco =0, totalVotos,voto 
	real joaoPorc, marciaPorc, clovisPorc, robertaPorc, nuloPorc, brancoPorc
	logico sair = falso
	cadeia sair1, Joao, Marcia, Clovis, Roberta
	
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
			escreva("digite (F) para finalizar \n")
			leia(voto)
			
			escolha(voto){
	
				caso 1: escreva("Você votou no joão \n")
					joao += 1 
					pare
				caso 2: escreva("Você votou na Márcia \n")
					marcia += 1
				pare
				caso 3: escreva("Você votou no Clóvis \n")
					clovis += 1
				pare
				caso 4: escreva("Você votou na Roberta \n")
					roberta += 1
				pare
				caso 5: escreva("Você votou Nulo \n")
					nulo += 1
				pare
				caso 6: escreva("Você votou em Branco \n")
					branco += 1
				pare
				caso contrario: escreva("Insira um voto válido \n")
				pare
				}
				escreva("Deseja sair? se sim digite ( F ) ou qualquer tecla para continuar votando \n")
				leia(sair1)
				se(sair1 == "F" ou sair1 == "f"){
					sair = verdadeiro
				}
		}enquanto(sair == falso)
		
			totalVotos = joao + marcia + clovis + roberta + nulo + branco

			joaoPorc = (joao * 100) / totalVotos
			escreva("João recebeu " + joaoPorc + "% dos votos e um total de "+joao+" votos \n")
			marciaPorc = (marcia * 100) / totalVotos
			escreva("Marcia recebeu " + marciaPorc + "% dos votos e um total de "+marcia+" votos \n")
			clovisPorc = (clovis * 100) / totalVotos
			escreva("Clovis recebeu " + clovisPorc + "% dos votos e um total de "+clovis+" votos \n")
			robertaPorc = (roberta * 100) / totalVotos
			escreva("Roberta recebeu " + robertaPorc + "% dos votos e um total de "+robertaPorc+" votos \n")
			nuloPorc = (nulo * 100) / totalVotos
			escreva("Votos nulos receberam " + nuloPorc + "% dos votos e um total de "+nulo+" votos \n")
			brancoPorc = (branco * 100) / totalVotos
			escreva("Votos em branco " + brancoPorc + "% dos votos e um total de "+branco+" votos \n")

			 se ( joao > marcia e joao > clovis e joao > roberta e joao > nulo e joao > branco) {
				escreva("O vencedor é Joao")
 			 } senao se (marcia > joao e marcia > clovis e marcia > roberta e marcia > nulo e marcia > branco) {
    				escreva("A vencedora é Marcia")
 			 } senao se (clovis > joao e clovis > marcia e clovis > roberta e clovis > nulo e clovis > branco) {
    				escreva("O vencedor é Clóvis")
 			 } senao se (roberta > joao e roberta > marcia e roberta > clovis e roberta > nulo e roberta > branco) {
   				 escreva("A vencedora é Roberta")
  			}
			
    }
			
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2827; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */