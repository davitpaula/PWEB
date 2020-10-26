function Retangulo(x, y){
    this.Altura = x;
    this.Base = y;
    this.calcArea = function(){
        var area = this.Altura * this.Base;
        return area;
    }
}
altura = prompt("Digite a altura do retangulo: ");
base = prompt("Digite a base do retangulo");
var retangulo1 = new Retangulo(altura, base);
alert("Area do retangulo: " + retangulo1.calcArea());