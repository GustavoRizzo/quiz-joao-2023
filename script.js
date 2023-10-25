function verificarResposta(cardAtual, resposta, cardSeguinte) {
    console.log(cardAtual, resposta, cardSeguinte);
    idResp=`res-${cardAtual}`;
    console.log(idResp);
    var respostaUsuario = document.getElementById(idResp).value.toLowerCase();
    if (respostaUsuario === resposta) {
        document.getElementById(cardSeguinte).classList.remove("hidden");
    } else {
        document.getElementById(cardAtual).classList.add("errado");
        setTimeout(function () {
            document.getElementById(cardAtual).classList.remove("errado");
        }, 300);
    }}

// base structure