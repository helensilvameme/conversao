const { application } = require("express");

let valor, tipoInicial, tipoFinal, resultado;
fValor = () => {
    do {
        valor = Number(prompt("Informe um número para transformar de horas para minutos ou segundos"));
        if (valor < 0 || parseInt(valor) != parseFloat(valor)) {
            return context.res.status(400).send("O valor informado é invalido, coloque um número para conversão");
        }
        console.log(valor);
    } while (valor < 0 || parseInt(valor) != parseFloat(valor));
    return valor;
}
fValor(); 

fTipoInicial = () => {
    do {
        tipoInicial = String(req.query("Digite uma letra para informar o tipo do valor informado: H para horas, M para minutos e S para segundos");
        tipoInicial = tipoInicial.toUpperCase(); 
        if (tipoInicial != 'H' && tipoInicial != 'M' && tipoInicial != 'S') {  
            return context.res.status(400).send("O valor informado e invalido, coloque uma letra comunicando o valor informado");
        }
        console.log(tipoInicial);
    } while (tipoInicial != 'H' && tipoInicial != 'M' && tipoInicial != 'S'); 
}
fTipoInicial();

fTipoFinal = () => { 
    do {
        tipoFinal = prompt("Digite uma letra para informar em qual tipo deseja transformar o valor informado: H para horas, M para minutos e S para segundos");
        tipoFinal = tipoFinal.toUpperCase(); 
        if (tipoFinal != 'H' && tipoFinal != 'M' && tipoFinal != 'S') { 
           return context.res.status(400).send("O valor informado e invalido, coloque uma letra comunicando o valor que deseja transformar");
        }
        console.log(tipoFinal);
    } while (tipoFinal != 'H' && tipoFinal != 'M' && tipoFinal != 'S'); 
    return context.res.status(200).send(tipoFinal);
}
fTipoFinal(); 

fTransformar = () => { 
    if (tipoInicial == 'S') {
        if (tipoFinal == 'M') { 
            resultado = valor / 60;
        } else { 
            resultado = valor / 3600
        }
    }
    if (tipoInicial == 'M') {
        if (tipoFinal == 'S') { 
            resultado = valor * 60;
        }
        else { 
            resultado = valor / 60;
        }
    }
    if (tipoInicial == 'H') {
        if (tipoFinal == 'M') { 
            resultado = valor * 60;
        }
        else { 
            resultado = valor * 3600;
        }
    }
    if (tipoInicial == tipoFinal) {
        return context.res.status(400).send("O valor informado e invalido, digite um valor diferente para transformar");
        resultado = valor / valor; 
    }
    return context.res.status(200).send(resultado);
}
fTransformar(); 
console.log(resultado);

module.exports = async function (context, req) {

    let valor = String(req.query.valor);
    let tipoInicial = Number(req.query.tipoInicial);
    let tipoFinal = Number(req.query.tipoFinal);

    if (isNaN(tipoInicial) || isNaN(tipoFinal)) {
        return context.res.status(400).send('Formato de dados incorreto, o campo peso e altura aceitam somente letras.');
    }

    let valorinformado = fvalor(valor);
    let valortransformar = (tipoInicial, tipoFinal);
    let conversaovalor = fTransformar(resultado);

    context.res.json({
        valor: valor, 
        tipodovalor: tipoInicial, 
        tipoparaconversao: tipoFinal, 
        conversao: resultado
    });
}