


function capitalizar(vetor){
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {

        var letraInicial = vetor[i].charAt(0).toUpperCase();
    
        var restoTexto = vetor[i].slice(1);
    
        var resultado = letraInicial + restoTexto;
    
        modificado[i] = resultado;
         
    
    }
    
    return modificado;
    
}

function caixaAlta(vetor){
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
    
        modificado[i] = vetor[i]. toUpperCase();
             
    }
    
    return modificado;
    
}



export default {

    capitalizar : capitalizar,
    caixaAlta : caixaAlta
}

console.log(capitalizar(vetor));
