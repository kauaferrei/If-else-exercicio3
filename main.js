function hoppy(){

alert("Bem vindo ao HOPPY HARI!!! \n antes de você entrar primeiro precisamos confirmar uma informação sua.");

let altura = Number(prompt("Quantos de Altura você tem? (Somente Números)"));

if(altura > 1.5){
alert("Você tem a altura necessária para entrar nos brinquedos. \n Boa sorte e se divirta!!");

}
else{
    alert("Infelizmente você não tem a altura suficiente para entrar nos brinquedos, Sinto muito.");
}
}



 function estoque(){

alert("Olá, Nós precisamos saber quanto de produtos nós temos na nossa empresa e precisamos de você!")

let produtos = Number(prompt("Quandos produtos no estoque você tem? (Somente Números!)"));

if(produtos >= 5){
    alert("OK");
}
else{
    alert("Estoque está baixo!")
}
}
function exercicio3(){

    

}

function taxa(){

    alert("Olá precisamos saber de umas informações suas!");

    let insento = Number(prompt("Quantos de valor você tem atualmente? (Somente Números)"));
    if(insento <= 756.5){
        alert("Seu valor está Insento!!")
    }
    else{
        alert("Infelizmente você terá que receber uma taxa de 10% por conta do seu valor.");
    }

}
function nota(){
    alert("Olá precisamos saber quanto de nota você teve, se foi aprovado ou não.")

    let nota = Number(prompt("Quantos de nota você teve? (Somente Números!)"));
    if(nota >= 5){
        alert("Parabéns! você foi APROVADO!");
    }
    else{
        alert("Infelizmente você não foi aprovado.")
    }

}

function diferente(){

    alert("Olá, voê terá que falar cores")
    let cor = String(prompt("Fale uma cor."));

    if (cor =="preto"){
       alert("Resultado Verdadeiro")
    }
    else{
    
      alert("Resultado Falso")
        
    }
}

function menor(){
    alert("Olá precisamos saber desse valor que você tem!")

    let valor = Number(prompt("Qual é o seu valor?"));
    if (valor ){

    }
}

