var nome = "";
var nota1 = "";
var nota2 = "";
var nota3 = "";

nome = prompt("Nome:");
nota1 = Number.parseFloat(prompt("Nota 1:"));
nota2 = Number.parseFloat(prompt("Nota 2:"));
nota3 = Number.parseFloat(prompt("Nota 3:"));
var media=(nota1 + nota2 + nota3)/3.0;
alert("Media aritmetica do " + nome + " = " + media);