var a = prompt("a = ");
var b = prompt("b = ");
var c = prompt("c = ");
alert("maior = " + maior(a,b,c));
function maior(a,b,c){
    function maior2(x, y){
        return (x>y)?x:y;
    }
    return (maior2(a,b)>maior2(b,c))?(maior2(a,b)):(maior2(b,c));
}