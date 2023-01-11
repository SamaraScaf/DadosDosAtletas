class Atleta {
    contructor (nome,idade,peso,altura,notas){
    this.nome=nome;
    this.idade=idade;
    this.peso=peso;
    this.altura=altura;
    this.notas=notas
    }
    calculaCategoria() {
        if(this.idade>9&& this.idade<11){
        return "Infantil"
        }
        else if(this.idade>12&& this.idade<13){
        return "Juvenil"
        }
        else if(this.idade>14&& this.idade<15){
        return "Intermediário"
        }
        else if(this.idade>16&& this.idade>30){
        return "Adulto"
        }else{
        return "Sem categoria"
        }
    
    calculaIMC(){
    return this.peso/(this.altura*this.altura)
    }
    
    calculaMediaValida(){
    let notasTotais = this.notas;
    let notasOrganizadas = notasTotais.sort(function comparaNumeros(a,b){
    if (a===b){
    return 0;
    if (a<b){
    return -1;
    }
    if (a>b);
    return 1;
    });
    }
    let notasComputadas = notasOrganizadas.slice(1,4)
    let somaNotasComputadas = notasComputadas.reduce(function(total,atual){
    return total + atual
    },0)
    }
    let media = (somaNotasComputadas / notasComputadas.length)
    return media;
    }