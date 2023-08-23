


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

// PROMOÇÕES

$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });
  