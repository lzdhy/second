
// função que calcula o saldo de rankeadas e o nivel do jogador
function calculate(victory , losses){
    
   return rankeadas = victory - losses
   
}

let balanceWins = calculate(190,96)

//variavel que armazena o nivel
level = " "

//atribuição de nivel de acordo com o numero de vitorias
if(balanceWins <= 10){
   level = "Inor"
}
 else if(balanceWins >= 11 && balanceWins <= 20){
   level = "Bronze"
}
else if(balanceWins >= 21 && balanceWins <= 50){
   level = "Silver"
}
else if(balanceWins >= 51 && balanceWins <= 80){
   level = "Glod"
}
else if(balanceWins >= 81 && balanceWins <= 90){
   level = "Diamond"
}
else if(balanceWins >= 91 && balanceWins <= 100){
   level = "Legendary"
}
else if(balanceWins >= 101){
   level = "Immortal"

}
console.log("The hero has the balance of: " + balanceWins, "and it's on the level: " + level)






 

