function Conta(){
    var nome;
    var banco;
    var conta;
    var saldo;
    
    this.getNome = function(){
        return nome;
    };
    this.setNome = function(value){
        nome = value;
    };
    this.getBanco = function(){
        return banco;
    };
    this.setBanco = function(value){
        banco = value;
    };
    this.getConta = function(){
        return conta;
    };
    this.setConta = function(value){
        conta = value;
    };
    this.getSaldo = function(){
        return saldo;
    }
    this.setSaldo = function(value){
        saldo = value;
    };}
    function Corrente(){
        var saldoEspecial;
        this.setSaldoEspecial = function(value){
            saldoEspecial = value;
        };
        this.getSaldoEspecial = function(){
            return saldoEspecial;
        };
    }
    function Poupanca(){
        var Juros;
        var DataVencimento;
        this.setJuros = function(value){
            Juros = value;
        };
        this.getJuros = function(){
            return Juros;
        };
        this.setDataVencimento = function(value){
            DataVencimento = value;
        };
        this.getDataVencimento = function(){
            return DataVencimento;
        };
        
    }
Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();
nCorrente = new Corrente();
nPoupanca = new Poupanca();

alert("Digite os dados da conta corrente:");
nCorrente.setNome(prompt("Digite o nome:"));
nCorrente.setBanco(prompt("Digite o banco:"));
nCorrente.setConta(prompt("Digite o numero da conta:"));
nCorrente.setSaldo(prompt("Digite o saldo:"));
nCorrente.setSaldoEspecial(prompt("Digite o saldo especial:"));

alert("Digite os dados da poupanca:");
nPoupanca.setNome(prompt("Digite o nome:"));
nPoupanca.setBanco(prompt("Digite o banco:"));
nPoupanca.setConta(prompt("Digite o numero da conta:"));
nPoupanca.setSaldo(prompt("Digite o saldo:"));
nPoupanca.setJuros(prompt("Digite os juros:"));
nPoupanca.setDataVencimento(prompt("Digite a data de vencimento:"));

alert("Dados da conta corrente:");
alert("Nome: " + nCorrente.getNome());
alert("Banco: " + nCorrente.getBanco());
alert("Numero da conta: " + nCorrente.getConta());
alert("Saldo: " + nCorrente.getSaldo());
alert("Saldo especial: " + nCorrente.getSaldoEspecial());

alert("Dados da poupanca:\n");
alert("Nome: " + nPoupanca.getNome());
alert("Banco: " + nPoupanca.getBanco());
alert("Numero da conta: " + nPoupanca.getConta());
alert("Saldo: " + nPoupanca.getSaldo());
alert("Juros: " + nPoupanca.getJuros());
alert("Data de vencimento: " + nPoupanca.getDataVencimento());

