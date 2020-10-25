var escolha = prompt("Pedra, papel ou tesoura?");
var CPU = Math.random();
if(CPU >=0 && CPU < 0.33)
    CPU = "Papel";
else
    if(CPU >=0.33 && CPU <= 0.66)
        CPU = "Pedra";
    else
        if(CPU >0.66 && CPU < 1)
            CPU = "Tesoura";
if(escolha=="Papel"){
    if(CPU == "Pedra")
        alert("Você ganhou!");
    else
        if(CPU == "Papel")
            alert("Empate");
        else
            if(CPU == "Tesoura")
                alert("O computador ganhou");}
if(escolha=="Pedra"){
    if(CPU == "Pedra")
        alert("Empate");
    else
        if(CPU == "Papel")
            alert("O computador ganhou");
        else
            if(CPU == "Tesoura")
                alert("Você ganhou!");}
if(escolha=="Tesoura"){
    if(CPU == "Pedra")
        alert("O computador ganhou");
    else
        if(CPU == "Papel")
            alert("Você ganhou!");
        else
            if(CPU == "Tesoura")
                alert("Empate");}