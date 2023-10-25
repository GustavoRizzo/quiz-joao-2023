function verificarResposta(cardAtual, resposta, cardSeguinte) {

    var card = document.getElementById(cardAtual);
    var respostaUsuario = card.querySelector("input").value.toLowerCase();
    if (respostaUsuario === resposta) {
        // show next card
        document.getElementById(cardSeguinte).classList.remove("hidden");
        // show tip
        var cardTip = card.querySelector('.card_tip');
        cardTip.classList.remove("hidden");
    } else {
        document.getElementById(cardAtual).classList.add("errado");
        setTimeout(function () {
            document.getElementById(cardAtual).classList.remove("errado");
        }, 300);
    }}
