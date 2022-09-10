let valor, tipoInicial, tipoFinal, resultado;
fValor = () => {
        if (valor < 0 || parseInt(valor) != parseFloat(valor)) {
            return "O valor informado é invalido, coloque um número para conversão";
        }
    return valor;
}
fValor(); 

fTipoInicial = () => {
        if (String(tipoInicial)) {  
            return "O valor informado e invalido, coloque uma letra comunicando o valor informado";
        }
        return tipoInicial;    
}
fTipoInicial();

fTipoFinal = () => { 
        if (String(tipoFinal)) { 
           return "O valor informado e invalido, coloque uma letra comunicando o valor que deseja transformar";
        }
    return tipoFinal;
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

}
fTransformar(); 

module.exports = async function (context, req) {

    let valor = Number(req.query.valor);
    let tipoInicial = String(req.query.tipoInicial);
    let tipoFinal = String(req.query.tipoFinal);

    if (isNaN(tipoInicial) || isNaN(tipoFinal)) {
        return context.res.status(400).send('Formato de dados incorreto, o campo aceita somente letras.');
    }

    context.res.json({
        valor: valor, 
        tipodovalor: tipoInicial, 
        tipoparaconversao: tipoFinal, 
        conversao: resultado
    });
}